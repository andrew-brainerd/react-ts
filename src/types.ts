import { LOAD_IMAGE, IMAGE_LOADED } from './actions';

export interface ImageResponse {
  data: {
    data: {
      title: string,
      images: {
        url: string
      }
    }
  }
}

export interface GiphyImage {
  title: string,
  images: any[] // eslint-disable-line
}

export interface ApplicationState {
  isLoadingImage: boolean,
  image: GiphyImage | null
}

interface LoadImageAction {
  type: typeof LOAD_IMAGE,
  query: string
}

interface ImageLoadedAction {
  type: typeof IMAGE_LOADED,
  image: GiphyImage
}

export type ImageActionTypes = LoadImageAction | ImageLoadedAction;
