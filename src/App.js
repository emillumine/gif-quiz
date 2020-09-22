import React from "react";
import GiphyApi from "giphy-api";
import randomWords from "random-words";
import GifList from "./components/gif_list";
import PlayerInput from "./components/player_input";
import "./assets/stylesheets/App.scss";

const giphy = GiphyApi("fafiKafsEJZchqyTLli0XAt4PQkz3Sk9");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      mysteryWord: "",
      attempt: 0,
    };
  }

  componentDidMount() {
    this.play();
  }

  fetchGifs = async (query) => {
    const response = await giphy.search({
      q: query,
      limit: 10,
      rating: "g",
    });
    return response.data.map((gifData) => {
      return { url: gifData.images.fixed_height.url, id: gifData.id };
    });
  };

  play = async () => {
    const mysteryWord = randomWords();
    const gifs = await this.fetchGifs(mysteryWord);
    this.setState({
      mysteryWord,
      gifs,
      attempt: 0,
    });
  };

  handlePlayerAnswer = (playerAnswer) => {
    const { mysteryWord, attempt } = this.state;
    if (playerAnswer === mysteryWord) {
      alert("you win!");
    } else {
      this.setState({ attempt: attempt + 1 });
      alert("you lose...");
    }
  };

  render() {
    const { gifs, attempt } = this.state;
    return (
      <div className="App">
        <PlayerInput handlePlayerAnswer={this.handlePlayerAnswer} />
        <button type="button" onClick={this.play}>
          Reset
        </button>
        <GifList gifs={gifs} length={attempt + 1} />
      </div>
    );
  }
}

export default App;
