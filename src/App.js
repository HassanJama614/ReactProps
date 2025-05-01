
import React from 'react';
import PlayersList from './PlayersList'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', marginBottom: '30px' }}>
        <h1>FIFA Player Cards</h1>
      </header>
      <PlayersList /> {}
    </div>
  );
}

export default App;