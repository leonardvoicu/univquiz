import React from "react";
import Answer from "./Answer";

const Question = React.memo(props => {
  const { id, title, answers } = props.question;

  const getColorClass = index => {
    let colorClass = "";
    if (index % 4 === 0) {
      colorClass = "question__answer--red";
    } else if (index % 4 === 1) {
      colorClass = "question__answer--yellow";
    } else if (index % 4 === 2) {
      colorClass = "question__answer--green";
    } else if (index % 4 === 3) {
      colorClass = "question__answer--lime-green";
    }
    return colorClass;
  };

  return (
    <div className="quiz_question">
      <h2 className="question__title">{title}</h2>
      <div className="question__answers">
        {answers.map((answer, index) => {
          return (
            <Answer
              colorClass={getColorClass(index)}
              answer={answer}
              index={index}
              key={`$${id}-answer-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Question;
