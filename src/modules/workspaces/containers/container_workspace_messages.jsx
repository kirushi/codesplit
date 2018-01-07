import React, { Component } from 'react';
import { connect } from 'react-redux';
import { H3 } from '../../../styles';

class ContainerWorkspaceMessages extends Component {
    render() {
        return (
            <H3>Workspace Messages</H3>
        );
    }
}

ContainerWorkspaceMessages = connect((state) => {
    return {
        workspaces: state.workspaces.all,
    };
})(ContainerWorkspaceMessages);

export default ContainerWorkspaceMessages;