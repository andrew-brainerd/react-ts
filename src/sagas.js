import { call, put, takeLatest } from 'redux-saga/effects';
import { getRandomImage } from './api';
import { LOAD_IMAGE, imageLoaded } from './actions';

export function* loadImage({ query }) {
  try {
    const response = yield call(getRandomImage, query);
    if (response) {
      yield put(imageLoaded(response));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* imageWatcher() {
  yield takeLatest(LOAD_IMAGE, loadImage);
}
