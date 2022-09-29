import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowGames from '../ShowGames/ShowGames';
import './Games.css';

const Games = () => {

    const [games,setGames]= useState([]);

    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('fakeDb.json')
        .then(res=>res.json())
        .then(data=>setGames(data));

    },[]);

    const handleAddToCart = (game) => {
        // console.log(game);
        const newCart = [...cart, game];

        setCart(newCart);

    }

    
    return (
        <div >
            <h3>Select Your Favorite Game</h3>
            
            <div className='main-page'>

                <div className='game-container'>
            {
                     games.map(game=> <ShowGames key={game._id} 
                        game={game}
                        handleAddToCart={handleAddToCart}
                     >

                     </ShowGames>)
            }
                </div>

                <div className='cart-container'>
                       <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Games;