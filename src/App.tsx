import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [word, setWord] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_syn=fast`)
  };
  return (
    <div className="App">
      
      <form>
        <label htmlFor='word-input'>Your Word</label>
        <input 
          onSubmit={handleSubmit}
          value={word}
          id='word-input'
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
