import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ImageViewerProps } from './container';

// interface ImageViewerProps {
//   loadRandomImage(): void
// }

const StyledImageViewer = styled.div`
  position: relative;
`;

const ImageViewer = ({ loadRandomImage }: ImageViewerProps) => {
  useEffect(() => {
    loadRandomImage();
  }, []); // eslint-disable-line

  return (
    <StyledImageViewer />
  );
};

export default ImageViewer;
