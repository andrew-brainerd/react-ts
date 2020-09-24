import React from 'react';
import styled from 'styled-components';

interface UserMessage {
  title: string,
  text: string
}

const Title = styled.div`
  font-size: 1.5em;
  margin: 20px auto;
`;

const Text = styled.div`
  font-style: italic;
`;

const Message = ({ title, text }: UserMessage): any => {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  );
}

export default Message;
