import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  const { gifs, length } = props;
  return (
    <ul>
      {gifs.slice(0, length).map(({ url, id }) => (
        <li key={id}>
          <Gif url={url} key={id} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
