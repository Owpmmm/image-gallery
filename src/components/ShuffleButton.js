import React from "react";

const ShuffleButton = ({ onClick }) => {
  return (
    <button className="shuffle-button" onClick={onClick}>
      Shuffle
    </button>
  );
};

export default ShuffleButton;
