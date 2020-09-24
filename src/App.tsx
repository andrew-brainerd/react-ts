import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const AppContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Message
        title={'Welcome'}
        text={'Hello, Typescript!'}
      />
    </AppContainer>
  );
}

export default App;
