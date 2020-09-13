import React, {useEffect} from 'react'
import { withRouter, useLocation } from "react-router";
import { connect } from "react-redux";
import { resetGame } from './../../redux/actions';
import jordan from './../../assets/loser.png';
import kobe from './../../assets/kobe-winner.png';
import './Result.scss';

export const Winner = () =>
<div className="result--wrapper">
    <img className="result--image" src={kobe || 'https://raw.githubusercontent.com/gokhanipek/duelingfans/master/src/assets/kobe-winner.png'} alt="kobe" />
    <p className="result--text">Winner!</p>
</div>


export const Loser = () => 
<div className="result--wrapper">
    <img className="result--image" src={jordan || 'https://raw.githubusercontent.com/gokhanipek/duelingfans/master/src/assets/loser.png'} alt="jordan" />
    <p className="result--text">Loser!</p>
</div>


const Result = ({score, turn, history, resetGame}) => {
    const checkIfComingFromDuelPage = score > 9 || turn > 9;
    useEffect(() => {
        !checkIfComingFromDuelPage && history.push('/home');
        resetGame();
    }, [])
    const {pathname} = useLocation();
    return pathname.includes('success') ? <Winner/> : <Loser/>
}

const mapDispatchToProps = dispatch =>({
    resetGame: () => dispatch(resetGame()),
})

const mapStateToProps = ({data}) => ({ 
    turn: data.turn,
    score: data.score,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));


