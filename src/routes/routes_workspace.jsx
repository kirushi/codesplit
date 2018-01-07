import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    ContainerWorkspaceHome,
    ContainerWorkspaceDocuments,
    ContainerWorkspaceMessages,
    ContainerWorkspaceProcesses,
} from '../modules/workspaces/containers';

export const RoutesWorkspace = () => (
    <Switch>
        <Route exact path='/workspace' component={ContainerWorkspaceHome} />
        <Route path='/workspace/home' component={ContainerWorkspaceHome} />
        <Route path='/workspace/documents' component={ContainerWorkspaceDocuments} />
        <Route path='/workspace/processes' component={ContainerWorkspaceProcesses} />
        <Route path='/workspace/messages' component={ContainerWorkspaceMessages} />
    </Switch>
);