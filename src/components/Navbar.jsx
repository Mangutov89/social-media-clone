
import React from "react";

function Navbar(){
  const stylesNav = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }
  const beginSection = {
    display: 'flex',
    flexDirection: 'row',
    // border: '1px solid black',
    justifyContent: 'space-around',
    width: '30vw',
  }

  const border = {
    border: '1px solid black',
    padding: '5px 13px',
  }

  const borderInput = {
    borderRadius: "25px"
  }

  return (
    <div>
      <div style={stylesNav}>
        <div style={beginSection}>
          <h2 style={border}>Home</h2>
          <h2 style={border}>Notifications</h2>
          <h2 style={border}>Messages</h2>
        </div>
        <div>
          <input type="text" placeholder="Search" style={borderInput}></input>
          <input type="text" placeholder="Tweet" style={borderInput}></input>
        </div>
      </div>
      <hr/>
    </div>


  );
}

export default Navbar;
