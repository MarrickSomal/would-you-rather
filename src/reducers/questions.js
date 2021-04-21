import {
  RECEIVE_QUESTIONS,
  CREATE_ANSWER_TO_QUESTION,
  CREATE_QUESTION,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    /*Any received questions are merged onto the new below object */
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case CREATE_ANSWER_TO_QUESTION:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      };

    case CREATE_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    /*If none of the cases match we return the state that was passed in */
    default:
      return state;
  }
}
