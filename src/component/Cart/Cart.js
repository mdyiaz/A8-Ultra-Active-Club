import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import { localStoragee } from '../LocalStorage/LOcalStorage';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    const [times,setTimes] = useState([])

    useEffect(() =>{
        fetch('Break.json')
        .then(res=>res.json())
        .then(data=>setTimes(data))
    },[]);


    const [breakUseState,setBreakUseState] = useState([0]);
    const handleBreak = (time) => {
        setBreakUseState(breakUseState);
        localStorage.setItem('breakTime', breakUseState);
       
    };

    useEffect(() => {
        const storedItem = localStorage.getItem('breakTime');
        if(storedItem){
            setBreakUseState(storedItem);
        }
    },[]);



    // start___________


    const local = localStorage.getItem('storeItem');

    const [riaz, setRiaz] = useState([local])



    const handleTen = () =>{
    setRiaz(10);
    
    localStoragee(10);
}

const handleTwenty = () =>{
    setRiaz(20);
    localStoragee(20);
    
}

const handleThirty = () =>{
    setRiaz(30);
    localStoragee(30);
    
}

const handleFourty = () =>{
    setRiaz(40);
    localStoragee(40);
    
}
    // End___________


    return (
        <div className='cart'>
             <h1>This is for Cart</h1>
            <p>Selected Items: {cart.length}</p>

           <div className='myself'>


                <div>
                    <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJvKfJTIgA72lH4HuEiVWglJulogIL9J-u_zCs2ZS3bOCkA8IM_Wa9UYbX97Zt_GjYbw&usqp=CAU" alt="" />
                </div>

                <div>
                    <p>Md Riaz</p>
                    <p><small>Dhaka, Jatrabari</small></p>
                </div>
           </div>

            <div className='profile'>
                <div className='inside-profile'>
                    <h3>57 <small>kg</small></h3>
                    <p>Weight</p>
                </div>

                <div className='inside-profile'>
                    <h3>5.6</h3>
                    <p>Height</p>
                </div>

                <div className='inside-profile'>
                    <h3>23 <small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>


            <h3>Add a Break</h3>

            <div className='break-sec'>
               {
                times.map(time => <BreakTime time = {time}
                    key={breakUseState}
                handleBreak = {handleBreak}>

                </BreakTime>)
               }
            </div>

            <div>
                <button onClick={handleTen}>10</button>
                <button onClick={handleTwenty}>20</button>
                <button onClick={handleThirty}>30</button>
                <button onClick={handleFourty}>40</button>

            </div>

            <div>
                <h3>Palying Details</h3>
                <p>Playing Time: </p>
                <p>Break Time: {riaz}</p>

                
            </div>

            <button className='activity'>
                <h3>Activity Completed</h3>
            </button>
        </div>
    );
};

export default Cart;