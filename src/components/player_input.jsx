import React from 'react'

class PlayerInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {value: ''}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        alert(this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your guess" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Play" />
            </form>
        )
    }
}

export default PlayerInput