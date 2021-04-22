import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    header: {
        backgroundColor: '#ecf6dd'
    },
    
    newPoll: {
        maxWidth: "516px",
        margin: "auto",
        justifyContent: 'flex-end',
        alignContent: 'center',
        padding: '30px',
    },

    orDivider: {
        textAlign: "center",
    },

    submitButton: {
        backgroundColor: '#043d6c',
        color: "white",
        margin: '10px',
        textTransform: 'none',
    },
}));
