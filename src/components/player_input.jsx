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
    const { mysteryWord } = this.props;
    const { playerAnswer } = this.state;
    const message = mysteryWord === playerAnswer ? "you win!" : "you lose...";
    alert(message);
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
