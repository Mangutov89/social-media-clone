import React from "react";
import Feed from "./Feed";
import Profile from "./Profile";

function BodyContent(){

  return (
    <div>
      <Feed/>
      <Profile/>
      <h3></h3>
      <h3>Thato and Haley</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </div>
  );
}

export default BodyContent;
