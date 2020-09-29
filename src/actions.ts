import { GiphyImage } from './types';

export const LOAD_IMAGE = 'LOAD_IMAGE';
export const IMAGE_LOADED = 'IMAGE_LOADED';

export const loadImage = { type: LOAD_IMAGE };
export const imageLoaded = (image: GiphyImage) => ({ type: IMAGE_LOADED, image });