import { path, propEq } from 'ramda';
import { ApplicationState } from './types';

export const getIsLoadingImage = (state: ApplicationState): boolean => propEq('isLoadingImage', true, state);

export const getImageUrl = (state: ApplicationState): string | undefined => path(['image', 'images', 'original', 'url'], state);

export const getImageTitle = (state: ApplicationState): string | undefined => path(['image', 'title'], state);
