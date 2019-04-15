import React from "react";
import FeedMessage from "./FeedMessage";

function Feed(){
   const FeedStyles = {
     display: 'flex',
     flexDirection: 'column',
   }

  return (
    <div styles={FeedStyles}>
      <FeedMessage
        name= "john"
        message= "hello how are you"/>
      <FeedMessage
        name = "Kate"
        message = "howdy"/>
      <FeedMessage
        name = "Dan"
        message = "Ssllo"/>
    </div>
  );
}

export default Feed;
