import React, { ReactElement, useContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { ThemeContext } from '../../style/theme';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { ImageViewerProps } from './container';

const ImageViewerContainer = styled.div`
  width: 90%;
`;

const ImageContainer = styled.div`
  align-items: center;
  position: relative;
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.color};
  display: flex;
  height: 70vh;
  justify-content: center;
  margin: 25px auto 10px auto;
  overflow: hidden;
  padding: 25px;
  transition: 0.3s all ease-in;

  img {
    object-fit: contain;
    height: 95%;
    width: 95%;
  }
`;

const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  div {
    margin: 25px;
  }
`;

const ImageViewer = ({ isLoading, imageUrl, imageTitle, loadRandomImage }: ImageViewerProps): ReactElement => {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState('turtle');

  console.log({ query });

  useEffect(() => {
    loadRandomImage(query);
  }, []); // eslint-disable-line

  return (
    <ImageViewerContainer theme={theme}>
      <ImageContainer theme={theme}>
        <img src={imageUrl} alt={imageTitle} />
      </ImageContainer>
      <ControlsContainer>
        <TextInput
          value={query}
          onChange={setQuery}
        />
        <Button
          text={'Randomize'}
          onClick={() => loadRandomImage(query)}
          disabled={isLoading}
        />
      </ControlsContainer>
    </ImageViewerContainer>
  );
};

export default ImageViewer;
