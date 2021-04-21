import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },

  card: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  header: {
    fontSize: '1.25em',
    backgroundColor: '#f3f4f5',
    padding: '1em',
  },

  questions: {
    textAlign: 'left',
  },

  toolbar: {
    maxWidth: '600px',
    justifyContent: 'flex-end',
    alignContent: 'center',
    margin: 'auto',
    padding: '8px',
    ...theme.mixins.toolbar,
  },

  tabLabel: {
    textTransform: 'none',
    fontSize: '1.3em',
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
