import React from 'react';

const Reader = React.createClass({
  render: function() {
    return (
      <div>
        wow
        {this.props.children}
      </div>
    )
  }
});
export default Reader;
