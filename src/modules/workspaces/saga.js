import { takeLatest, call, put } from 'redux-saga/effects';
import * as TYPES from './types';

const api = (url) => fetch(url).then(response => response.json());

function* fetchWorkspaces(action) {
    try {
        const data = yield call(api, "");
        yield put({ type: TYPES.FETCH_WORKSPACES, data: data.results });
    } catch (e) {
        console.log(e);
    }
}

const workspaceSagas = [
    takeLatest(TYPES.FETCH_WORKSPACES, fetchWorkspaces),
];

export default workspaceSagas;