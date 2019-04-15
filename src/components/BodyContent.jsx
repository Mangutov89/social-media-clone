import React from "react";
import Feed from "./Feed";
import Profile from "./Profile";

function BodyContent(){
  const contentLayout = {
    display: 'flex',
    flexDirection: 'rows',
    width: '100%'
  }
  const contentWidth = {
    width: '45%'
  }
  return (
    <div style={contentLayout}>
      <div style={contentWidth}>
        <Profile/>
      </div>
      <div style={contentWidth}>
        <Feed/>
      </div>
    </div>
  );
}

export default BodyContent;
