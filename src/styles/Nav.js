import { createStyles } from '@material-ui/core/styles';

export const styles = theme => createStyles({


    appBar: {
        position: "fixed",
        background: '#ecf6dd',
    },

    isActive: {
        fontWeight: 500,
    },

    logoutButton: {
        color: "#043d6c",
        fontSize: "1em",
        textTransform: 'none',
    },

    navigationLinks: {
        color: "#043d6c",
        display: "flex",
        flexDirection: "row",
        fontSize: "1.2em",
        listStyle: "none",
        margin: 0,
    },

    navigationLink: {
        color: "#043d6c",
        position: "relative",
        marginRight: "16px",
        marginLeft: "16px",
        paddingLeft: 0,
        float: "left",
        textDecoration: "none",
        boxShadow: "none",
    },

    navigationUsername: {
        color: "#043d6c",
        fontWeight: "400",
        fontSize: "1.2em",
        marginLeft: "1em",
        marginRight: "1em",
    },

    rightMenu: {
        flexGrow: "0.9",
    },
});