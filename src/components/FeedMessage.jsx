import React from "react";
import PropTypes from "prop-types";

function FeedMessage(props){
  const FeedMessStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '15vw',
  }
  return (
      <div style={FeedMessStyle}>
        <p><strong>{props.name}</strong></p>
        <p>{props.message}</p>
      </div>
   );
}

FeedMessage.propTypes = {
  names: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default FeedMessage;
