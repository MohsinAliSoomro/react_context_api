import React, { useState, useContext, createContext } from 'react';
import CounterContext from './countContext'
function Child(props){
    let counterContext=useContext(CounterContext)
    return(
        <div>
            <h1>Child component </h1>
            <h1>Your Name is {props.name} </h1>
    <h1>Value of counter is {counterContext}</h1>
        </div>
    );
}
export default Child;