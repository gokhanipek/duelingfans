import React from 'react';
import './Player.scss';

const Player = ({name, image, fppg, onClick}) => {
    return (
        <div className="player__page--wrapper" onClick={onClick}>
            <div className="player__card">
                <img className="player__card--image" src={image} alt="player" />
            </div>
            <p className="player__name">{name}</p>
            <p>{fppg || 0}</p>
        </div>
    )
}

export default Player;
