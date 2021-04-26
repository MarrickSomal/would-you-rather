import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';

/*
The function uses the Redux return pattern, to allow an asynchronous request 
to be made inside the function.

Invoke our getInitialData function to 
return a promise containing an object with users property
and questions property.

The users and questions are added to the state of the Redux store
via the action creators receiveQuestions and receiveUsers.

*/

export function handleInitialData() {
  return (dispatch) => {
    if (localStorage.getItem('reduxState') !== null) {
    } else {
      return getInitialData().then(({ users, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      });
    }
  };
}
