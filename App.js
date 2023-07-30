import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundDark, setBackgroundDark] = useState(false);

  const toggleBackground = () => {
    setBackgroundDark((prevState) => !prevState);
  };

  return (
    <div className={`App ${isBackgroundDark ? 'dark' : 'light'}`}>
      <button onClick={toggleBackground}>
        Toggle Background Color
      </button>
    </div>
  );
}

export default App;
