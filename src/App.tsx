import React from 'react';
import code from './pictures/code.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={code} className="App-logo" alt="code" />
      </header>
    </div>
  );
}

export default App;
