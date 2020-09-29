import { path } from 'ramda';
import { ApplicationState } from './types';

export const getImageUrl = (state: ApplicationState): string | undefined => path(['image', 'images', 'original', 'url'], state);

export const getImageTitle = (state: ApplicationState): string | undefined => path(['image', 'title'], state);
