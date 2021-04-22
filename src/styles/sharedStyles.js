import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    justifyContent: 'flex-end',
    alignContent: 'center',
    margin: 'auto',
    padding: '10px',
  },

  card: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
  },

  cardSpacing: {
    marginTop: "20px",
  },

  header: {
    fontSize: '1.25em',
    backgroundColor: '#ecf6dd',
    padding: '1em',
  },

  questions: {
    textAlign: 'left',
  },

  noAnswersText: {
    color: 'white',
    fontSize: '1.25em',
    paddingTop: '100px',
  },

  submitButton: {
    backgroundColor: '#043d6c',
    color: "white",
    margin: '10px', 
    textTransform: 'none', 
  },

  tabLabel: {
    textTransform: 'none',
    fontSize: '1.3em',
  },

  tabIndicator: {
    color: 'white',
  },

  userSelected: {
    background: 'rgb(215, 260, 200)',
    border: '1px solid',
    borderColor: 'rgb(33, 182, 174)',
    borderRadius: '6px',
    color: 'rgb(0, 70, 50)',
    margin: 'auto',
    padding: '0.4em',
  },
}));
