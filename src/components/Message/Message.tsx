import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../style/theme';
import Button from '../Button/Button';

interface UserMessage {
  title: string,
  text: string
}

const Container = styled.div`
  align-items: center;
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.color};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 10px 25px;
  transition: 0.3s all ease-in;
  user-select: none;
  width: 50%;
`;

const Title = styled.div`
  color: ${props => props.theme.headerColor};
  font-size: 2em;
  font-weight: bold;
  margin: 20px auto;
`;

const Text = styled.div`
  color: ${props => props.theme.color};
  font-style: italic;
  margin: 20px auto;
`;

const Message = ({ title, text }: UserMessage): any => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Title theme={theme}>{title}</Title>
      <Text theme={theme}>{text}</Text>
      <Button
        text='Button'
        onClick={() => alert('Hello')}
      />
    </Container>
  );
}

export default Message;
