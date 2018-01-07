import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkspaces } from '../actions';
import { H3, H6 } from '../../../styles';

class ContainerWorkspaceHome extends Component {
    componentWillMount() {
        this.props.fetchWorkspaces();
    }

    renderWorkspaces() {
        return this.props.workspaces.map((workspace) => (
            <H6 key={workspace.id}>{workspace.group} - {workspace.name}</H6>
        ));
    }

    render() {
        return (
            <div>
                <H3>Workspace Home</H3>
                {this.renderWorkspaces()}
            </div>
        );
    }
}

ContainerWorkspaceHome = connect((state) => {
    return {
        workspaces: state.workspaces.all,
    };
}, { fetchWorkspaces })(ContainerWorkspaceHome);

export default ContainerWorkspaceHome;