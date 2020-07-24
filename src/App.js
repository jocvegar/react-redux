import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, log } from './actions'
import './App.css';

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();

  function addMe() {
    dispatch(increment())
  }

  function minusMe() {
    dispatch(decrement())
  }

  function logMe() {
    dispatch(log())
  }

  return (
    <div className="App">
        <h2>HOLA MUNDO</h2>
        <br/>
        counter {counter}
        <br/>
        <button onClick={addMe}>+</button>
        <button onClick={minusMe}>-</button>
        <button onClick={()=> dispatch(increment(5))}>+5</button>
        <br/>
        <h5>
          {isLogged ? "Welcome!" : "Am I logged In?"}
        </h5>
        <button onClick={logMe}>Please Log In</button>
    </div>
  );
}

export default App;
