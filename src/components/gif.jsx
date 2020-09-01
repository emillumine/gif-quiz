import React from 'react';

class Gif extends React.Component {
    render() {
        const {url} = this.props
        return (
            <img src={url} alt="awesome gif"/>
        )
    }
}

export default Gif;
