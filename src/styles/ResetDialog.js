import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dialogButton: {
    textTransform: 'none',
    backgroundColor: '#043d6c',
    color: 'white',
    width: '150px',
  },

  dialogButtonGrid: {
    justifyContent: 'center',
  },

  resetButton: {
    textTransform: 'none',
    backgroundColor: '#e32504',
    color: 'white',
  },

  snackBar: {
    height: '100%',
  },
}));
