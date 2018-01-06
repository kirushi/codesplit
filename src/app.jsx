import React from 'react';
import { RootContainer, Aside, Main } from './styles';
import { NavigationMain, NavigationCommon } from './common';
import { Switch, Route } from 'react-router-dom';
import { Overview, Workspace, Documents, Messages, Processes } from './pages';

export default () => (
    <RootContainer>
        <Aside>
            <NavigationCommon />
            <NavigationMain />
        </Aside>
        <Main>
            <Switch>
                <Route exact path='/' component={Overview} />
                <Route path='/workspace' component={Workspace} />
                <Route path='/documents' component={Documents} />
                <Route path='/messages' component={Messages} />
                <Route path='/processes' component={Processes} />
            </Switch>
        </Main>
    </RootContainer>
);