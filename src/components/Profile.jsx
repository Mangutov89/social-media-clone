import React from "react";

function Profile(){
  const blueColor = {
    backgroundColor: 'lightblue',
    height: '20px'
  }
  const flexStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  return (
    <div>
      <div style={blueColor}>
      </div>
      <div>
        <div style={flexStyle}>
          <img></img>
          <p><strong>John Doe</strong></p>
        </div>
        <div style={flexStyle}>
          <p>Tweets</p>
          <p>Following</p>
          <p>Followers</p>
        </div>
      </div>
    </div>


  );
}

export default Profile;
