import React from "react";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerAnswer: "" };
  }

  handleChange = (event) => {
    this.setState({ playerAnswer: event.target.value });
  };

  handleSubmit = (event) => {
    const { handlePlayerAnswer } = this.props;
    const { playerAnswer } = this.state;
    handlePlayerAnswer(playerAnswer);
    event.preventDefault();
  };

  render() {
    const { playerAnswer } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your guess"
          value={playerAnswer}
          onChange={this.handleChange}
        />
        <input type="submit" value="Play" />
      </form>
    );
  }
}

export default PlayerInput;
