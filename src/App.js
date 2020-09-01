import React from 'react'
import GiphyApi from 'giphy-api'
import GifList from './components/gif_list'
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

    render() {
        const {gifs} = this.state
        return (
            <div className="App">
                <GifList gifs={gifs} />
            </div>
        )
    }
}

export default App
