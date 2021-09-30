import React from 'react';
import { IRobot } from './MainPage';


const Card = ({ name, id, email } : IRobot) => {

     

    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/test${id}?200*200`} width="200" height="200" alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;