'use strict';

var React = require('react');

var Category = React.createClass({
  propTypes: {
    category: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      quizzes: []
    };
  },
  componentWillMount: function() {
    this.bindAsArray(new Firebase(
      'https://contents.firebaseio.com/game/quizzes/'
    ), 'quizzes');
  },

  render: function() {
    var btnStatus;
    var categoryPoints = this.state.quizzes.map(function(point) {
      if (point.status === 'read') {
        btnStatus = ' disabled';
      } else if (point.status === 'active') {
        btnStatus = ' active';
      } else if (point.status === 'unread') {
        btnStatus = '';
      }
      return (
        <div className="category-points">
          <button className={'category-btn btn' + btnStatus}
            key={point.id}>
            {point.value}
          </button>
        </div>
       );
    });

    return (
      <div className="category" key={this.props.category.id}>
        <div className="category-name">{this.props.category.name}</div>
        {categoryPoints}
      </div>
    );
  }
});

module.exports = Category;
