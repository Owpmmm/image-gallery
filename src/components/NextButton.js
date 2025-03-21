import React from "react";

const NextButton = ({ onClick }) => {
  return (
    <button className="next-button" onClick={onClick}>
      Next
    </button>
  );
};

export default NextButton;
