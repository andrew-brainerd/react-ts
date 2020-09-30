import { GiphyImage, ImageActionTypes } from './types';

export const LOAD_IMAGE = 'LOAD_IMAGE';
export const IMAGE_LOADED = 'IMAGE_LOADED';

export const loadImage = (query: string): ImageActionTypes => ({ type: LOAD_IMAGE, query });
export const imageLoaded = (image: GiphyImage): ImageActionTypes => ({ type: IMAGE_LOADED, image });
