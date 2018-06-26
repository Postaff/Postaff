import React from 'react';
import Image from './Image.jsx';
import JobDetail from './JobDetail.jsx';
import Attachments from './Attachments.jsx';
import Notes from "./Notes.jsx";


class AdminJob extends React.Component {

  render() {
    return (
      <div>
        <div style={{display: "flex"}}>
          <Image />     
          <JobDetail />
        </div>  
        <div style={{display: "flex"}}>
          <Attachments />
          <Notes />
        </div>
      </div>
    );
  }
};

export default AdminJob;