'use strict';

var React = require('react');

var QuizBox = React.createClass({
  render: function() {
    return (
      <section className="quizzes row well">
        <div className="questions col-xs-7">
            When the future state of Iowa, became part of the
            United States, this man was President.
        </div>
        <div className="answers col-xs-5">
          <div className="answers-buttons btn-group-vertical">
            <button className="btn btn-danger">A. Washington</button>
            <button className="btn btn-default">B. Reagan</button>
            <button className="btn btn-default">C. FDR</button>
            <button className="btn btn-success">D. Jefferson</button>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = QuizBox;
