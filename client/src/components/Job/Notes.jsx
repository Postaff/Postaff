import React from 'react';
import {
  FormControl,
  InputLabel,
  Input, 
  Card,
} from '@material-ui/core';
import sampleData from './sampleData.js';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: sampleData,
      name: 'Composed TextField',
    };
    
  }

  handleChange(event) {
    
    this.setState({ name: event.target.value });
  }


  render() {
    return (
      
      <Card style={{ flex: 1, height: 200, marginTop: 20, marginLeft: 50, marginRight:50}}>
        <FormControl>
          <InputLabel>Notes</InputLabel>
          <Input value={this.state.name} onChange={this.handleChange.bind(this)} />
        </FormControl>  
      </Card>
     
    );
  }
}

export default Notes;