import React from 'react';
import Gif from './gif';

class GifList extends React.Component {
    render() {
        const {gifs} = this.props;
        return (
            <ul>
                {gifs.map(({url, id}) => <li key={id}><Gif url={url} key={id} /></li>)}
            </ul>
        )
    }
}

export default GifList
