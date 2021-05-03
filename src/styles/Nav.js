import { createStyles } from '@material-ui/core/styles';

export const styles = (theme) =>
  createStyles({
    appBar: {
      background: '#ecf6dd',
      padding: 0,
      position: 'fixed',
    },

    isActive: {
      fontWeight: 600,
    },

    logoutButton: {
      color: '#043d6c',
    },

    logoutLink: {
      color: '#043d6c',
      fontSize: '1em',
      textDecoration: 'none',
      textTransform: 'none',
    },

    navigationLinks: {
      color: '#043d6c',
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      margin: 0,
      [theme.breakpoints.down("800")]: {
        display: "none"
       },
    },

    navigationLink: {
      color: '#043d6c',
      fontSize: '1.2em',
      position: 'relative',
      marginRight: '16px',
      marginLeft: '16px',
      textDecoration: 'none',
    },

    navigationMenu: {
      display: "none",
      [theme.breakpoints.down("800")]: {
        display: "block"
       },
    },

    navigationSpacing: {
      flexGrow: '0.9',
    },

    navigationUsername: {
      color: '#043d6c',
      fontWeight: '400',
      fontSize: '1.2em',
      marginLeft: '1em',
      marginRight: '1em',
    },

    rightMenu: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  });
