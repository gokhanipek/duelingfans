import React from 'react';
import './Player.scss';

const Player = ({name, image, fppg, onClickHandler, showFppg}) => {
    return (
        <div className="player__page--wrapper" id="player-card" onClick={onClickHandler}>
            <div className="player__card">
                {showFppg && <p className="player__fppg">{ fppg || 0 }</p>}
                <img className="player__card--image" src={image} alt="player" />
            </div>
            <p className="player__name">{name}</p>
        </div>
    )
}

export default Player;
