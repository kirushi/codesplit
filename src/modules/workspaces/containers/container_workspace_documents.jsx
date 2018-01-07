import React, { Component } from 'react';
import { connect } from 'react-redux';
import { H3 } from '../../../styles';

class ContainerWorkspaceDocuments extends Component {
    render() {
        return (
            <H3>Workspace Documents</H3>
        );
    }
}

ContainerWorkspaceDocuments = connect((state) => {
    return {
        workspaces: state.workspaces.all,
    };
})(ContainerWorkspaceDocuments);

export { ContainerWorkspaceDocuments };