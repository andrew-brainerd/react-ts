import { LOAD_IMAGE, IMAGE_LOADED } from './actions';

export interface GiphyImage {
  title: string,
  images: any[]
}

export interface ApplicationState {
  isLoadingImage: boolean,
  image: object | null
}

interface LoadImageAction {
  type: typeof LOAD_IMAGE
}

interface ImageLoadedAction {
  type: typeof IMAGE_LOADED,
  image: GiphyImage
}

export type ImageActionTypes = LoadImageAction | ImageLoadedAction;
