import React from 'react';
import Image from './Image.jsx';
import JobDetail from './JobDetail.jsx';
import Attachments from './Attachments.jsx';
import Notes from "./Notes.jsx";


class AdminJob extends React.Component {

  render() {
    console.log("Hey i am in AdminJob.jsx");
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