import React from 'react';
import { TabbedNavList, TabbedNavListItem } from '../styles';

export const NavigationWorkspace = () => (
    <TabbedNavList>
        <li>
            <TabbedNavListItem exact to='/workspace'>Home</TabbedNavListItem>
        </li>
        <li>
            <TabbedNavListItem to='/workspace/messages'>Messages</TabbedNavListItem>
        </li>
        <li>
            <TabbedNavListItem to='/workspace/processes'>Processes</TabbedNavListItem>
        </li>
        <li>
            <TabbedNavListItem to='/workspace/documents'>Documents</TabbedNavListItem>
        </li>
    </TabbedNavList>
);