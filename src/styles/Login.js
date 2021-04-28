import { makeStyles } from '@material-ui/core/styles';

export const  useStyles = makeStyles((theme) => ({

    buttonGrid: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20px',
    },

    content: {
      flex: '1 1 auto',
      backgroundColor: '#04e38c',
    },

    header: {
      backgroundColor: '#ecf6dd',
    },

    formContainer: {
      maxHeight: '530px',
      maxWidth: '500px',
      margin: 'auto',
      padding: '32px',
      flex: '1 1 auto',
    },

    formTag: {
      display: 'inline',
      backgroundColor: 'transparent',
    },

    loginButton: {
      textTransform: 'none',
      backgroundColor: '#043d6c',
      color: 'white',
    },

    page: {
      height: '100%',
      display: 'flex',
      flexFlow: 'column',
    },

    pageSizing: {
      height: '100vh',
      margin: 0,
    },

    resetButton: {
      textTransform: 'none',
      backgroundColor: '#e32504',
      color: 'white',
      margin: '10px',
    },

    select: {
      '&:before': {
        borderColor: '#043d6c',
      },
      '&:after': {
        borderColor: '#043d6c',
      },
    },
}));
