import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../app';

export const RoutesMain = () => (
    <Router>
        <Route path='/' component={App} />
    </Router>
);