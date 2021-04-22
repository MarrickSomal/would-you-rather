import { createStyles } from '@material-ui/core/styles';

export const styles = theme => createStyles({

    content: {
        flex: "1 1 auto",
        backgroundColor: "#04e38c",
    },

    header: {
        backgroundColor: '#ecf6dd'
    },

    formContainer: {
        maxHeight: "1000px",
        maxWidth: "500px",
        margin: "auto",
        padding: "32px",
        flex: "1 1 auto"
    },
    
    formTag: {
        display: "inline",
        backgroundColor: "transparent"
    },

    loginButton: {
        textTransform: 'none',
        backgroundColor: '#043d6c'
    },

    page: {
        height: "100%",
        display: "flex",
        flexFlow: "column",
    },

    pageSizing: {
        height: "100vh", 
        margin: 0
    },

    select: {
        '&:before': {
            borderColor: "#04e38c",
        },
        '&:after': {
            borderColor: "#04e38c",
        }
    },
});