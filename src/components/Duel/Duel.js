import React, {useEffect} from 'react';
import Player from './../Player/Player';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPlayerListRequest, incrementScore, incrementTurn, hideFppg } from './../../redux/actions';
import './Duel.scss';

const Duel = ({players, getPlayerListRequest, hideFppg, incrementScore, incrementTurn, score, turn, showFppg, history}) => {

    useEffect(() => {
      getPlayerListRequest();
    }, []);

    const style = {
      backgroundPositionX: `${turn !== 0 ? turn * 10: 0}%`
    };

    const onClickHandler = fppg => {
      if(showFppg) return;
      const highestNumber = players.length > 0 && Math.max(...players.map(player => player.fppg))
      fppg >= highestNumber ? incrementScore() : incrementTurn();
    }

    const nextRound = () => {
      if(turn > 9) history.push(`/result&${score > 9 ? 'success' : 'fail'}`)
      hideFppg();
      getPlayerListRequest();
    }

    return (
      <div className="duel__page--wrapper">
          <div className="duel__basketball--wrapper">
            <div className="duel__basketball" style={style}/>
          </div>
          <p className="duel__score">Your score: <span>{score}</span></p>
          <div className="duel__player--wrapper">
            {players.length > 0 && players.map(player =>
              <Player
                name={player.first_name + ' ' + player.last_name}
                image={player.images.default.url}
                fppg={player.fppg}
                showFppg={showFppg}
                onClickHandler={() => onClickHandler(player.fppg)}
              />)}
          </div>
          <div className="duel__page--button" onClick={() => nextRound()}>Next</div>
      </div>
    );
}

const mapDispatchToProps = dispatch =>({
  getPlayerListRequest: () => dispatch(getPlayerListRequest()),
  incrementScore: () => dispatch(incrementScore()),
  incrementTurn: () => dispatch(incrementTurn()),
  hideFppg: () => dispatch(hideFppg()),
})
const mapStateToProps = ({data}) => ({ 
  players: data.playerList,
  turn: data.turn,
  score: data.score,
  showFppg: data.showFppg
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Duel));