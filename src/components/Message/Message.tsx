import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../style/theme';

interface UserMessage {
  title: string,
  text: string
}

const Container = styled.div`
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.color};
  border-radius: 5px;
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
    </Container>
  );
}

export default Message;
