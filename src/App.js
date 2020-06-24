import React from 'react';
import Parent from './component/parent';
import './App.css';
import counterContext from './component/countContext';

function App() {
  return (
    <counterContext.Provider value={224}>
      <div className="App">
        <Parent name="Taha" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
