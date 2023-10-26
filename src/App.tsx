import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [word, setWord] = useState("")
  return (
    <div className="App">
      
      <form>
        <label htmlFor='word-input'>Your Word</label>
        <input 
          id='word-input'
          onChange={(e) => setWord(e.target.value)}
        
        ></input>
      </form>
    </div>
  );
}

export default App;
