import React from 'react';
import { NavList, NavListItem } from '../styles/common';

export const NavigationMain = () => (
    <NavList>
        <li>
            <NavListItem exact to='/'>Overview</NavListItem>
        </li>
        <li>
            <NavListItem to='/workspace'>Workspace</NavListItem>
        </li>
        <li>
            <NavListItem to='/processes'>My Processes</NavListItem>
        </li>
        <li>
            <NavListItem to='/documents'>My Documents</NavListItem>
        </li>
        <li>
            <NavListItem to='/messages'>My Messages</NavListItem>
        </li>
    </NavList>
);