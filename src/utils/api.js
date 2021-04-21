import { _getUsers, _getQuestions } from './_DATA';

/*Wrap the _getUsers & _getQuestions  API calls into an
   easy-to-use function*/

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions,
  }));
}
