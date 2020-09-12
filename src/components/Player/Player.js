import React, {useState} from 'react';
import './Player.scss';

const Player = ({name, image, fppg, onClickHandler, showFppg}) => {
    return (
        <div className="player__page--wrapper" onClick={onClickHandler}>
            <div className="player__card">
                <img className="player__card--image" src={image} alt="player" />
            </div>
            <p className="player__name">{name}</p>
            {showFppg && <p>{fppg || 0}</p>}
        </div>
    )
}

export default Player;
