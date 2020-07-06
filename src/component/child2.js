import React, { useReducer } from 'react';
import CounterReducer from './counterReducer';
const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer,1);
    console.log(state);
    return(
        <div>
            <h1>This is Using Counter Reducer</h1>
            <h1>This is state value : {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>INCREMENT REDUCER</button>
        </div>
    );
}
export default Child2;