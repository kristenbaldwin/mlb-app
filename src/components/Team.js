import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Row, Col } from 'react-bootstrap';
import TeamHeader from './TeamHeader';
import TeamInfo from './TeamInfo';
import '../styles/Teams.css';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roster: []
        }
    };

    componentDidMount() {
        let url = "http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=" + this.props.team.team_id;
        fetch(url).then(results => {
            return results.json();
        }).then(data => {
            let roster = data.roster_40.queryResults.row;
            this.setState({roster: roster});

            let teamRoster = this.state.roster.sort(function (a, b) {
                return a.jersey_number - b.jersey_number;
            });
            teamRoster = teamRoster.map((player) => {
                return (
                    <tr key={player.name_display_first_last}>
                        <td>{player.jersey_number}</td>
                        <td>{player.name_display_first_last}</td>
                        <td>{player.position_txt}</td>
                        <td>{player.bats}</td>
                        <td>{player.throws}</td>
                    </tr>
                )
            })
            this.setState({teamRoster: teamRoster})
        })
    }
    
    render() {
        return (
            <Grid fluid={true}>
                <TeamHeader />
                <TeamInfo />
                <Row className="rosterHeader">
                    <h2>{this.props.team.name_display_full} 40 Man Roster</h2>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th className="rowHeader">No.</th>
                                    <th className="rowHeader">Player</th>
                                    <th className="rowHeader">Position</th>
                                    <th className="rowHeader">Bats</th>
                                    <th className="rowHeader">Throws</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teamRoster}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        team: state.team.teamId
    }
}

export default connect(mapStateToProps, null)(Team);