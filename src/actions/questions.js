
//Action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

//Action creator
export function receiveQuestions(questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    };
  }