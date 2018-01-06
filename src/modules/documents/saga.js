import { takeLatest, call, put } from 'redux-saga/effects';
import * as TYPES from './types';

const api = (url) => fetch(url).then(response => response.json());

function* fetchDocumentsGen(action) {
    try {
        const data = yield call(api, "");
        yield put({ type: TYPES.FETCH_DOCUMENTS, data: data.results });
    } catch (e) {
        console.log(e);
    }
}

const documentSagas = [
    takeLatest(TYPES.FETCH_DOCUMENTS, fetchDocumentsGen),
];

export default documentSagas;