import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as documents from './documents';
import * as workspaces from './workspaces';

const rootReducer = combineReducers({
    documents: documents.reducer,
    workspaces: workspaces.reducer,
});

export function* rootSaga() {
    yield all([
        ...documents.saga,
        ...workspaces.saga,
    ]);
};

export const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};