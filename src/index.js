import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { baseStyles } from './styles';
import { theme } from './styles/common';
import { configureStore } from './modules';
import { RoutesMain } from './routes';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

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
