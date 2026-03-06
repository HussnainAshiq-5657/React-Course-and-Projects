import { createContext, useReducer } from 'react';
import questionsData from '../data/questions.json';

export const QuizContext = createContext();

const initialState = {
  username: '',
  questions: questionsData,
  index: 0,
  score: 0,
  completed: false,
};

function reducerFunction(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        username: action.payload,
      };

    case 'ANSWER':
      return {
        ...state,
        score: action.payload ? state.score + 1 : state.score,
        index: state.index + 1,
      };

    case 'FINISH':
      return {
        ...state,
        completed: true,
      };

    case 'RESET':
      return {
        ...initialState,
        username: state.username,
      };

    default:
      return state;
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}

export default QuizProvider;
