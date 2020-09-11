import React, {useEffect, useState} from 'react';
import Player from './../Player/Player';
import { sampleSize } from 'lodash';
import './Duel.scss';


const API = 'https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json';
const Duel = () => {

    const [data, setData] = useState([]);
    const [score, setScore] = useState(0);
    const [turn, setTurn] = useState(0);

    useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(({players}) => setData(players));
    }, [])

    const style = {
      backgroundPositionX: `${turn !== 0 ? turn * 10: 0}%`
    };

    let randomizePlayerArray = sampleSize(data, 2);
    console.warn(randomizePlayerArray);

    const onClickHandler = (fppg) => {
      const highestNumber = Math.max(...randomizePlayerArray.map(player => player.fppg))
      return fppg >= highestNumber ? setScore(score + 1) : setTurn(turn + 1) ;
    }
  
    return (
      <div className="duel__page--wrapper">
          <div className="duel__basketball--wrapper">
            <div className="duel__basketball" style={style}/>
          </div>
          <div className="duel__player--wrapper">
            {score < 10 && randomizePlayerArray.map(player => 
              <Player 
                name={player.first_name + ' ' + player.last_name}
                image={player.images.default.url}
                fppg={player.fppg}
                onClick={() => onClickHandler(player.fppg)}
              />)}
          </div>
             {score}
      </div>
    );
}

export default Duel