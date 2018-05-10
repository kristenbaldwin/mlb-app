import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/TeamInfo.css';

class TeamInfo extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <p className="teamBio"><b>Division: </b>{this.props.team.division_full}</p>
                    <p className="teamBio"><b>Located: </b>{this.props.team.city}, {this.props.team.state}</p>
                    <p className="teamBio"><b>Ballpark: </b>{this.props.team.venue_name}</p>
                    <p className="teamBio"><b>Established: </b>{this.props.team.first_year_of_play}</p>
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

export default connect(mapStateToProps, null)(TeamInfo);