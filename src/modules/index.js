import {
    all
} from 'redux-saga/effects';
import {
    combineReducers
} from 'redux';
import {
    documentSagas,
    documents
} from './documents';
import {
    workspaceSagas,
    workspaces
} from './workspaces';

const rootReducer = combineReducers({
    documents,
    workspaces,
});

function* allSagas() {
    yield all([
        ...documentSagas,
        ...workspaceSagas,
    ]);
};

export {
    rootReducer,
    allSagas,
}