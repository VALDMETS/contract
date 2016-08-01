import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

const Reader = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      body: [],
      read: ''
    }
  },
  render: function() {
    let bodyArray = this.state.body.map(function(par, i){
      return <p key={i}>{par}</p>
    });
    let contractContent = (
      <div className="contract">
        <h4>{this.state.title}</h4>
        {bodyArray}
      </div>
    );
    return (
      <div className="contractbox">
        {contractContent}
        <form>
          Mark as read
          <input id="checker" type="checkbox" onClick={this.clickHandler} checked={this.state.read}/>
        </form>
        {this.props.children}
      </div>
    )
  },
  componentDidMount: function() {
    this.setState({
      title: store.contract.get('title'),
      body: store.contract.get('body')
    });
  },
  clickHandler: function() {
    store.contract.set({read: "true"});
    this.setState({read: store.contract.get('read')});
    hashHistory.push('/main/confirm');
  }
});
export default Reader;
