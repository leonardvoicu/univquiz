import React from "react";
import Question from "../components/Question";
import AppContext from "../AppContext";

const Quiz = React.memo(props => {
  const { state, dispatch } = React.useContext(AppContext);
  console.log("stateQuiz", state);
  const questions = [
    {
      id: 1,
      title: "Question 1",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    }
    // {
    //   id: 2,
    //   title: "Question 2",
    //   answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    // },
    // {
    //   id: 3,
    //   title: "Question 3",
    //   answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    // },
    // {
    //   id: 4,
    //   title: "Question 4",
    //   answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    // }
  ];

  return (
    <div className="quiz">
      <section className="quiz__title">{state.selectedCategory.title}</section>
      {questions.map(question => (
        <Question question={question} key={`question-${question.id}`} />
      ))}
    </div>
  );
});

export default Quiz;
