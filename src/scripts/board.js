'use strict';

var React = require('react');

var Category = require('./category');
var QuizBox = require('./quizbox');
var Player = require('./player');

var Board = React.createClass({

  getInitialState: function() {
    return {
      categories: [],
      players: []
    };
  },
  componentWillMount: function() {
    this.bindAsArray(new Firebase(
      'https://contents.firebaseio.com/game/categories/'
    ), 'categories');
    this.bindAsArray(new Firebase(
      'https://contents.firebaseio.com/game/players/'
    ), 'players');
  },

  render: function() {
    var allCategories = this.state.categories.map(function(c) {
      return (
        <div className="col-xs-2" key={c.id}>
          <Category key={c.id} category={c} />
        </div>
      );
    });
    var allPlayers = this.state.players.map(function(p) {
      return (
        <div className="col-xs-4" key={p.id}>
          <Player key={p.id} player={p} />
        </div>
      );
    });

    return (
      <main className="main container-fluid">
        <section className="categories row">
          {allCategories}
        </section>
        <QuizBox/>
        <section className="players row">
          {allPlayers}
        </section>
      </main>
    );
  }
});

module.exports = Board;
