import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from '../../../common';

const WorkspaceDocumentsLoader = Loadable({
    loader: () => import('../containers/container_workspace_documents'),
    loading: Loading,
});

export const WorkspaceDocuments = () => <WorkspaceDocumentsLoader />;