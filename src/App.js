import React, { useState } from 'react';
import Parent from './component/parent';
import './App.css';
import counterContext from './component/countContext';

function App() {
  let counterState=useState(0);
  return (
    <counterContext.Provider value={counterState}>
      <div className="App">
        <Parent name="Taha" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
