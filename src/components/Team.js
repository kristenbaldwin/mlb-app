import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {
    render() {
        return (
            <div>
                {this.props.teamId}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        teamId: state.team.teamId
    }
}

export default connect(mapStateToProps)(Team);