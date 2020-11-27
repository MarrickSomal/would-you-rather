import { RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
      /*Any received questions are merged onto the new below object */
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
        /*If none of the cases match we return the state that was passed in */
    default:
      return state;
  }
}