import React from 'react'
import GiphyApi from 'giphy-api'
import randomWords from 'random-words'
import GifList from './components/gif_list'
import PlayerInput from './components/player_input'
import './App.css'


const giphy = GiphyApi('fafiKafsEJZchqyTLli0XAt4PQkz3Sk9')

class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            gifs: [],
        }
    }

    componentDidMount() {
        this.fetchGifs("hello")
    }

    fetchGifs = (query) => {
        giphy.search({
            q: query,
            limit: 10,
            rating: 'g',
        }).then((response) => {
            this.setState({
                gifs: response.data.map((gifData) => {
                    return { url: gifData.images.fixed_height.url, id: gifData.id }
                }),
            })
        })
    }

    play = () => {
        this.fetchGifs(randomWords())
    }

    render() {
        const {gifs} = this.state
        return (
            <div className="App">
                <PlayerInput /><button onClick={this.play}>Play</button>
                <GifList gifs={gifs} />
            </div>
        )
    }
}

export default App
