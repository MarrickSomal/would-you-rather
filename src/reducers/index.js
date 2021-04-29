import { combineReducers } from 'redux';
import authedUser from '../reducers/authedUser';
import questions from '../reducers/questions';
import users from '../reducers/users';

const appReducer = combineReducers({
  authedUser,
  questions,
  users,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'RESET_APP') {
    localStorage.removeItem('gameData');
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
