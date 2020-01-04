export const initialAppReducer = {
  quiz: [],
  selectedCategory: {
    value: 1,
    title: "Test"
  }
};

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const STORE_QUIZ = "STORE_QUIZ";

export const appReducer = (state, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, selectedCategory: action.selectedCategory };
    case STORE_QUIZ:
      return { ...state, quiz: action.quiz };
    default:
      return;
  }
  // switch (action.type) {
  //   case "ADD":
  //     return [...state, action.payload];
  //   case "CLEAR":
  //     return [];
  //   case "DISMISS":
  //     return state.filter((message, index) => index !== action.payload);
  //   default:
  //     return state;
  // }
};

export function selectCategory(category) {
  console.log("category", category);
  return {
    type: SELECT_CATEGORY,
    selectedCategory: category
  };
}

export function storeQuiz(quiz) {
  console.log("quiz", quiz);
  return {
    type: STORE_QUIZ,
    quiz: quiz
  };
}
