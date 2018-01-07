import React from 'react';
import { NavigationWorkspace } from '../common';
import { RoutesWorkspace } from '../routes';
import { ContainerPadded } from '../styles';

export const Workspace = () => (
    <ContainerPadded>
        <NavigationWorkspace />
        <RoutesWorkspace />
    </ContainerPadded>
);