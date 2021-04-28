import React, { useState } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../actions/users';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from '../styles/ResetDialog';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ResetDialog = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(resetApp())
    setOpen(false);
    handleMessageOpen();
  };

  const handleMessageOpen = () => {
    setMessageOpen(true);
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setMessageOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.resetButton}
        fullWidth
        variant="contained"
        onClick={handleDialogOpen}
      >
        Reset Game
      </Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Reset the game?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will delete all your added questions and answers. The game will reset to show only
            its original set of questions.
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogButtonGrid}>
          <Button className={classes.dialogButton} onClick={handleSubmit} variant="contained">
            Reset
          </Button>
          <Button className={classes.dialogButton} onClick={handleDialogClose} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={messageOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={handleMessageClose}
        className={classes.snackBar}
      >
        <Alert onClose={handleMessageClose} severity="success">
          Game successfully reset
        </Alert>
      </Snackbar>
    </div>
  );
}

export default connect()(ResetDialog);
