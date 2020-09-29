import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../style/theme';
import Button from '../Button/Button';
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
  margin: 25px auto;
  overflow: hidden;
  padding: 25px;
  transition: 0.3s all ease-in;

  img {
    object-fit: contain;
    height: 95%;
    width: 95%;
  }
`;

const ImageViewer = ({ isLoading, imageUrl, imageTitle, loadRandomImage }: ImageViewerProps) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    loadRandomImage();
  }, []); // eslint-disable-line

  return (
    <ImageViewerContainer theme={theme}>
      <ImageContainer theme={theme}>
        <img src={imageUrl} alt={imageTitle} />
      </ImageContainer>
      <Button
        text={'Randomize'}
        onClick={() => loadRandomImage()}
        disabled={isLoading}
        style={{ marginBottom: '25px' }}
      />
    </ImageViewerContainer>
  );
};

export default ImageViewer;
