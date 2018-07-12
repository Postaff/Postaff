import React from 'react';
import {
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FileUpload from '@material-ui/icons/FileUpload';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  input: {
    display: 'none',
  },
});

function Attachments(props) {
  const { classes } = props;
  return (
    <Paper style={{ height: '100%' }}>
    <div>
      <Typography variant="display1" gutterBottom>
        Attachments
      </Typography>
      <input
      accept="image/*"
      className={classes.input}
      id="flat-button-file"
      multiple
      type="file"
      />
      <label htmlFor="flat-button-file">
        <Button component="span" color="primary" className={classes.button}>
         Upload
         <FileUpload className={classes.rightIcon} />
        </Button>
      </label>
      </div>
    </Paper>
  );
}

Attachments.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Attachments);
