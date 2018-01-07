import React, { Component } from 'react';
import * as Loadable from 'react-loadable';
import { Loading } from '../../../common';

const WorkspaceHomeLoader = Loadable({
    loader: () => import('../containers/container_workspace_home'),
    loading: Loading,
});

export class WorkspaceHome extends Component {
    render() {
        return <WorkspaceHomeLoader />;
    }
};