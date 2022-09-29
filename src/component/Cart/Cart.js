import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    const [times,setTimes] = useState([])

    useEffect(() =>{
        fetch('Break.json')
        .then(res=>res.json())
        .then(data=>setTimes(data))
    },[])


    const handleBreak = (time) => {
        console.log('clicked');

    //    const  newTime = [...times, time];
    //    setTimes(newTime);

    }


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
                handleBreak = {handleBreak}>

                </BreakTime>)
               }
            </div>

            <div>
                <h3>Palying Details</h3>
                <p>Playing Time: </p>
                <p>Break Time: </p>
            </div>

            <button className='activity'>
                <h3>Activity Completed</h3>
            </button>
        </div>
    );
};

export default Cart;