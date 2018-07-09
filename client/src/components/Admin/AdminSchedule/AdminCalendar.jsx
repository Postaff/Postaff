import React from 'react';
import Calendar from 'react-calendar';

class AdminCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(date) {
    this.setState({ date });
  } 

  render() {
    return (
      <div>
        <Calendar
          style={{ color: 'blue' }}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default AdminCalendar;
