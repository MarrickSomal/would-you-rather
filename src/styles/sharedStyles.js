import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "10px",
    },
  
    card: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: 25,
      maxWidth: "xs",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
  
    header: {
      fontSize: "1.25em",
      backgroundColor: "#f3f4f5",
      padding: "1em",
    },

    toolbar: {
        width: "800px" ,
        justifyContent: 'flex-end',
        alignContent:"center",
        margin: "auto",
        padding: '8px',
        ...theme.mixins.toolbar,
      },

    progressbar: {
      barColorSecondary: "black"
    },

  }));

  export { useStyles };