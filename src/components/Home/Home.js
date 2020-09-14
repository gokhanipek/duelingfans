import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import curry from './../../assets/curry.png';

const Home = () => {
    return (
        <div className="home__page--wrapper">
            <div className="home__page--banner">
                <h2 className="home__page--title">One way to <span className="home__page--colored">win</span></h2>
                <img className="home__page--player" src={curry} alt="cover" />
            </div>
            <Link className="home__page--button" to="/duel">Play Now!</Link>
            <p className="home__page--info">Guess which player has a better score! You can always skip to next set if you are not sure! Win prizes!<span>(This feature is currently in development)</span></p>
        </div>
    )
}

export default Home
