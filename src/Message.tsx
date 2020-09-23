import React from 'react';

interface UserMessage {
  name: string,
  text: string
}

const Message = ({ name, text }: UserMessage): any => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Message: {text}</p>
    </div>
  );
}

export default Message;
