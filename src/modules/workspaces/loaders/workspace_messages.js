import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from '../../../common';

const WorkspaceMessagesLoader = Loadable({
    loader: () => import('../containers/container_workspace_messages'),
    loading: Loading,
});

export const WorkspaceMessages = () => <WorkspaceMessagesLoader />;