import { addAnswerToUser, addQuestionToUser  } from '../actions/users';
import {_saveQuestion,_saveQuestionAnswer} from '../utils/_DATA';

//Action type
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_ANSWER_TO_QUESTION = 'CREATE_ANSWER_TO_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

//Action creator
function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  };
}

export function receiveQuestions(questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    };
  }

export function createAnswerToQuestion( authedUser, qid, answer) {
  return {
    type: CREATE_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(createQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authedUser, qid, answer));
    dispatch(createAnswerToQuestion(authedUser, qid, answer));

    return saveQuestionAnswer(authedUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}






  