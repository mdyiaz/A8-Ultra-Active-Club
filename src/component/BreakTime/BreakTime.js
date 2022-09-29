import React, { useState } from 'react';
import './BreakTime.css';



const BreakTime = (props) => {
   

    const {handleBreak,time} = props;
   
    return (
        <div >
            {/* <h5 className='break-time' onClick={() => handleBreak(time)}> {props.time}min</h5> */}
        </div>
    );
};

export default BreakTime;