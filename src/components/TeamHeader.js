import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/TeamHeader.css';

class TeamHeader extends Component {
    render() {
        let currentTeam = this.props.team;
        if (currentTeam.name_abbrev === "CWS") {
            currentTeam.name_abbrev = "CHW";
        }
        let logoUrl = "http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + currentTeam.name_abbrev + ".png&h=80&w=80";

        return (
            <Row className="teamHeader">
                <Col xs={2} className="logo">
                    <img src={logoUrl} alt={currentTeam.name_display_full} />
                </Col>
                <Col xs={10} className="currentTeamName">
                    <h1>{currentTeam.name_display_full}</h1>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        team: state.team.teamId
    }
}

export default connect(mapStateToProps, null)(TeamHeader);