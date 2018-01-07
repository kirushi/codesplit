import { takeLatest, put } from 'redux-saga/effects';
import * as TYPES from './types';

function* fetchWorkspacesGen(action) {
    try {
        const data = {
            results: [
                {
                    id: 1,
                    name: 'Finance',
                    group: 'Singapore',
                },
                {
                    id: 2,
                    name: 'Human Resources',
                    group: 'Singapore',
                },
                {
                    id: 3,
                    name: 'Operations',
                    group: 'Singapore',
                }
            ]
        };
        yield put({ type: TYPES.FETCH_WORKSPACES_SUCCESS, payload: data.results });
    } catch (e) {
        console.log(e);
    }
}

export const workspaceSagas = [
    takeLatest(TYPES.FETCH_WORKSPACES, fetchWorkspacesGen),
];