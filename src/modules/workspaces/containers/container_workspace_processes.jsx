import React, { Component } from 'react';
import { connect } from 'react-redux';
import { H3 } from '../../../styles';

class ContainerWorkspaceProcesses extends Component {
    render() {
        return (
            <H3>Workspace Processes</H3>
        );
    }
}

ContainerWorkspaceProcesses = connect((state) => {
    return {
        workspaces: state.workspaces.all,
    };
})(ContainerWorkspaceProcesses);

export default ContainerWorkspaceProcesses;