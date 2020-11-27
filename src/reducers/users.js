import { RECEIVE_USERS } from '../actions/users';



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
    default:
      return state;
  }
}