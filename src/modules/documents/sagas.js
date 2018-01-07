import { takeLatest, put } from 'redux-saga/effects';
import * as TYPES from './types';

function* fetchDocumentsGen(action) {
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
        yield put({ type: TYPES.FETCH_DOCUMENTS, payload: data.results });
    } catch (e) {
        console.log(e);
    }
}

export const documentSagas = [
    takeLatest(TYPES.FETCH_DOCUMENTS, fetchDocumentsGen),
];