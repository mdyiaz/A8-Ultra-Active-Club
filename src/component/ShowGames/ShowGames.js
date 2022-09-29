import React from 'react';
import './ShowGames.css'

const ShowGames = (props) => {
    const {game,handleAddToCart} = props;
    const {name,picture,age,time} = game;
    return (
        <div className='game'>
           <div>
                <img src={picture} alt=""></img>       
           </div>

           <div>
                 <p>Name: {name}</p>
                 <p>For Age: {age}</p>
                 <p>Time Required: Minimum {time} Min</p>
           </div>

           <button onClick={()=>handleAddToCart(game)} className='btn-cart'>
                <h3>
                    Add to List
                </h3>
           </button>


           


        </div>
    );
};

export default ShowGames;