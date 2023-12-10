import React from'react';
import UserGreeting from './UserGreeting';
import './App.css';

function App() {
  // const player = UserGreeting.username;


  return (
    <div >
      <UserGreeting player="John Wick" />
    </div>
  );
}

export default App;
