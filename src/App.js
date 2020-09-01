import React from 'react';
import './App.css';
import GifList from './components/gif_list';

class App extends React.Component {
    render() {
        const gifs = [
            {
                url: 'https://media.giphy.com/media/j5PrIx7lLNRo4pGYYB/source.gif',
                id: 'j5PrIx7lLNRo4pGYYB',
            }, {
                url: 'https://media.giphy.com/media/MeJgB3yMMwIaHmKD4z/source.gif',
                id: 'MeJgB3yMMwIaHmKD4z',
            },
        ]
        return (
            <div className="App">
                <GifList gifs={gifs} />
            </div>
        );
    }
}

export default App;
