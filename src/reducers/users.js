import { 
  RECEIVE_USERS,   
  ADD_ANSWER_TO_USER,
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    /*when the case is RECEIVE_USERS, the new users slice
    of state includes the current state (which is an empty object)
    as well as all the users which we are receiving via the action */
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
      case ADD_ANSWER_TO_USER:
        const { authedUser, qid, answer } = action;
  
        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        };
    default:
      return state;
  }
}