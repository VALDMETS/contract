import React from 'react';
import {hashHistory} from 'react-router';
import store from '../store';

const Popup = React.createClass({
  render: function() {
    return (
      <div id="overlay">
        <div className="confirmation">
          <h3>Are you sure you want to mark this contract as read?</h3>
          <div className="buttonbox">
            <input type="button" value="Confirm" onClick={this.confirmFunction}/>
            <input type="button" value="Go Back" onClick={this.goBackFunction}/>
          </div>
        </div>
      </div>
    )
  },
  confirmFunction: function() {
    hashHistory.push('/main');
  },
  goBackFunction: function() {
    store.contract.set({read: ''});
    store.contract.trigger('update');
    hashHistory.push('/main');
  }
});
export default Popup;
