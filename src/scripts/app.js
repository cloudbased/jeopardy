'use strict';

var React = require('react');

var Board = require('./board');

var App = React.createClass({

  render: function() {
    return (
      <Board/>
    );
  }
});

module.exports = App;

React.render(<App />, document.getElementById('container'));
