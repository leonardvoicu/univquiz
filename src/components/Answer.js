import React from "react";
import AppContext from "../AppContext";

const Answer = React.memo(props => {
  const { state } = React.useContext(AppContext);

  const { index, answer, colorClass } = props;

  const onClickAnswer = e => {
    console.log("state", state);
  };

  return (
    <div className={`question__answer ${colorClass}`} onClick={onClickAnswer}>
      <span>{answer}</span>
    </div>
  );
});

export default Answer;
