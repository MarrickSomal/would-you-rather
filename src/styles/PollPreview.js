import { createStyles } from '@material-ui/core/styles';

export const styles = (theme) =>
  createStyles({
    answerPollButton: {
      backgroundColor: '#043d6c',
      color: 'white',
      textTransform: 'none',
    },

    question: {
      fontSize: '1.2em',
      fontWeight: '500',
    },

    questionText: {
      fontSize: '1em',
      textAlign: 'center',
    },
  });
