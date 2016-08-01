import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

const Reader = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      body: ''
    }
  },
  render: function() {
    let contractContent = (
      <div className="contract">
        <h4>{this.state.title}</h4>
        <p>{this.state.body}</p>
      </div>
    );
    return (
      <div className="contractbox">
        {contractContent}
        <form>
          Mark as read
          <input type="checkbox" onClick={this.clickHandler}/>
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
    console.log('wow wee');
    hashHistory.push('/main/confirm');
  }
});
export default Reader;
