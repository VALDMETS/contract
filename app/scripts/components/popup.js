import React from 'react';

const Popup = React.createClass({
  render: function() {
    return (
      <div id="overlay">
        <div className="confirmation">
          <h3>Are you sure you want to mark this contract as read?</h3>
          <input type="button" value="Confirm"/>
          <input type="button" value="Go Back"/>
        </div>
      </div>
    )
  }
});
export default Popup;
