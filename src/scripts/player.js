'use strict';

var React = require('react');

var Player = React.createClass({

  propTypes: {
    player: React.PropType.object
  },
  render: function() {
    var score = this.props.player.score;
    var scoreValue = score < 0 ? 'negative' : '';
    return (
     <section className="player">
      <div className="player-name">{this.props.player.name}</div>
      <div className={'player-score ' + scoreValue}>{score}</div>
      <div className="player-actions">
        <button className="btn btn-danger">
         <i className="fa fa-close"></i>
        </button>
        <button className="btn btn-success">
          <i className="fa fa-check"></i>
        </button>
      </div>
    </section>
    );
  }
});

module.exports = Player;
