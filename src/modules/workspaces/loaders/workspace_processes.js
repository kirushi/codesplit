import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from '../../../common';

const WorkspaceProcessesLoader = Loadable({
    loader: () => import('../containers/container_workspace_processes'),
    loading: Loading,
});

export const WorkspaceProcesses = () => <WorkspaceProcessesLoader />;