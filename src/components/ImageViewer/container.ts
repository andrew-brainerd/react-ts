import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../../types';
import { getIsLoadingImage, getImageUrl, getImageTitle } from '../../selectors';
import { loadImage } from '../../actions';
import ImageViewer from './ImageViewer';

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: getIsLoadingImage(state),
  imageUrl: getImageUrl(state),
  imageTitle: getImageTitle(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadRandomImage: () => dispatch(loadImage)
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ImageViewerProps = ConnectedProps<typeof connector>;

export default connector(ImageViewer);
