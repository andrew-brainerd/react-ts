import { ApplicationState, ImageActionTypes } from './types';
import { LOAD_IMAGE, IMAGE_LOADED } from './actions';

export const initialState: ApplicationState = {
  isLoadingImage: false,
  image: null
};

const images = (state = initialState, action: ImageActionTypes): ApplicationState => {
  switch (action.type) {
    case LOAD_IMAGE:
      return {
        ...state,
        isLoadingImage: true
      };
    case IMAGE_LOADED:
      return {
        ...state,
        isLoadingImage: false,
        image: action.image
      };
    default:
      return state;
  }
};

export default images;
