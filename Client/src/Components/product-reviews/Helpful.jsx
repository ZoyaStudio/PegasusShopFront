import React, { useState } from "react";
import PropTypes from "prop-types";

// Passes in helpfulCOunter and incrementCounter. Allows user the option to click yes if the
// review was helpful, and if it was it would incrememnt the helpfulCounter and remove the ability
// to click yes again.
function Helpful({ helpfulCounter, incrementCounter }) {
  const [isYes, setYes] = useState(false);

  function onClick() {
    incrementCounter();
    setYes(true);
  }

  function onHandleKeyDown() {
    onClick();
  }

  return (
    <div>
      <span>Helpful? </span>
      {!isYes && (
        <u onClick={onClick} onKeyDown={onHandleKeyDown} role="link" tabIndex={0}>
          Yes
        </u>
      )}
      <span>
        (
        {helpfulCounter}
        )
      </span>
    </div>
  );
}

Helpful.propTypes = {
  helpfulCounter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

export default Helpful;
