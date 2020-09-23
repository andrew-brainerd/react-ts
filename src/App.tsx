import React from 'react';
import Message from './Message';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Message
        name={'Andrew'}
        text={'Hello, Typescript!'}
      />
    </div>
  );
}

export default App;
