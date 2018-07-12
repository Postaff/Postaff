import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Paper,
  Typography,
} from '@material-ui/core';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Notes for this job...',
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <Paper style={{ height: '100%' }}>
        <FormControl>
       <Typography variant="display1" gutterBottom>
         Notes
        </Typography>
        <Input value={this.state.name} onChange={this.handleChange.bind(this)} />
        </FormControl>
      </Paper>
    );
  }
}

export default Notes;
