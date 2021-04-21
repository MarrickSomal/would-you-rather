/* logger shows us anytime that a new action is dispatched
as well as what the new state is going to be after the action is dispatched   */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  /* we can get a return value from invoking next which is goign to be dispatched, 
      passing it the action. This updates the state which allows us to say what the new state is,
      by calling store.getState */
  const returnValue = next(action);
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
