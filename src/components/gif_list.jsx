import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  const { gifs, length } = props;
  return (
    <ul className="gif-list">
      {gifs.slice(0, length).map(({ url, id }) => (
        <li className="gif" key={id}>
          <Gif url={url} key={id} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
