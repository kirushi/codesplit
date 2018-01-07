import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';
import { baseStyles } from './styles';
import { theme } from './styles/common';
import { allSagas, rootReducer } from './modules';
import { RoutesMain } from './routes';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(allSagas);

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RoutesMain />
        </ThemeProvider>
    </Provider>
);

const render = () => {
    baseStyles();
    ReactDOM.render(<App />, document.getElementById('root'));
};

render();
registerServiceWorker();
