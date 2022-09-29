import React, { useEffect, useState } from 'react';
// import BreakTime from '../BreakTime/BreakTime';
import { localStoragee } from '../LocalStorage/LOcalStorage';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(Cart);

    let total = 0;
    for(const game of cart){
        total = total + game.time;
    }

    // console.log(cart);

    // const [times,setTimes] = useState([])

    // useEffect(() =>{
    //     fetch('Break.json')
    //     .then(res=>res.json())
    //     .then(data=>setTimes(data))
    // },[]);


    // const [breakUseState,setBreakUseState] = useState([0]);
    // const handleBreak = (time) => {
    //     setBreakUseState(breakUseState);
    //     localStorage.setItem('breakTime', breakUseState);
       
    // };

    // useEffect(() => {
    //     const storedItem = localStorage.getItem('breakTime');
    //     if(storedItem){
    //         setBreakUseState(storedItem);
    //     }
    // },[]);



    // start BreakPart___________


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
    // End BreakPart___________


    const notify = () => toast('Here is your toast.');



    


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
               {/* {
                times.map(time => <BreakTime time = {time}
                    key={breakUseState}
                handleBreak = {handleBreak}>

                </BreakTime>)
               } */}
            </div>

            <div>
                <button onClick={handleTen}>10</button>
                <button onClick={handleTwenty}>20</button>
                <button onClick={handleThirty}>30</button>
                <button onClick={handleFourty}>40</button>

            </div>

            <div>
                <h3>Palying Details</h3>
                <p>Playing Time: {total}</p>
                <p>Break Time: {riaz}</p>

                
            </div>

            <button onClick={notify} className='activity'>
                <h3>Activity Completed</h3>
            </button>

               <ToastContainer></ToastContainer>



               <div>
                    <h4>Question_1: How To React Work?</h4>
                    <p>Ans: 
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook</p>


               <h4>Question_2: Props and State difference?</h4>
               <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>


               <h4>Question_3: What useEffect is used for other than data load?</h4>

               <p>Ans: Main reason to use useEffect in React. 1.useEffect use cases
1. Running once on mount: fetch API data
2. Running on state change: validating input field
3.Running on state change: live filtering
4. Running on state change: trigger animation on new array value
5.Running on props change: update paragraph list on fetched API data update
6. Running on props change: updating fetched API data to get BTC updated price</p>
               </div>

        </div>
    );
};

export default Cart;