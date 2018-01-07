import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    WorkspaceHome,
    WorkspaceDocuments,
    WorkspaceMessages,
    WorkspaceProcesses,
} from '../modules/workspaces/loaders';

export const RoutesWorkspace = () => (
    <Switch>
        <Route exact path='/workspace' component={WorkspaceHome} />
        <Route path='/workspace/home' component={WorkspaceHome} />
        <Route path='/workspace/documents' component={WorkspaceDocuments} />
        <Route path='/workspace/processes' component={WorkspaceProcesses} />
        <Route path='/workspace/messages' component={WorkspaceMessages} />
    </Switch>
);