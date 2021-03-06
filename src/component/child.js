import React, { useContext } from 'react';
import CounterContext from './countContext'
function Child(props) {
    let counterContext = useContext(CounterContext)
    return (
        <div>
            <h1>Child component counter Context</h1>
            <h1>Your Name is {props.name} </h1>
            <h1>Value of counter is {counterContext[0]}</h1>
            <button onClick={()=>counterContext[1](++counterContext[0])}>
                Increment
            </button>
        </div>
    );
}
export default Child;