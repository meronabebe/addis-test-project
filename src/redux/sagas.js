import { takeEvery, put } from 'redux-saga/effects';
import { addSong, editSong, deleteSong } from './songsSlice';

function* handleAddSong(action) {
  yield put(addSong(action.payload));
}

function* handleEditSong(action) {
  yield put(editSong(action.payload));
}

function* handleDeleteSong(action) {
  yield put(deleteSong(action.payload));
}

function* rootSaga() {
  yield takeEvery('ADD_SONG_REQUEST', handleAddSong);
  yield takeEvery('EDIT_SONG_REQUEST', handleEditSong);
  yield takeEvery('DELETE_SONG_REQUEST', handleDeleteSong);
}

export default rootSaga;
