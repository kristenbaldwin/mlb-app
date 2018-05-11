import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import { loadAllTeams } from '../actions/AllTeams_actions';
import '../styles/Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.onTeamsLoad()
    }

    render() {
        let aleTeams = this.props.allTeams.map((team) => {
                if (team.division_abbrev === "ALE") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <Link to={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team)} 
                            className="teamName"><h4>{team.name_display_full}</h4></Link>
                        </div>
                    )
                }
            })

            let alcTeams = this.props.allTeams.map((team) => {
                if (team.name_abbrev === "CWS") {
                    team.name_abbrev = "CHW";
                }
                if (team.division_abbrev === "ALC") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <Link to={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team)} className="teamName"><h4>{team.name_display_full}</h4></Link>
                        </div>
                    )
                }
            })

            let alwTeams = this.props.allTeams.map((team) => {
                if (team.division_abbrev === "ALW") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <Link to={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team)} className="teamName"><h4>{team.name_display_full}</h4></Link>
                        </div>
                    )
                }
            })

            let nleTeams = this.props.allTeams.map((team) => {
                if (team.division_abbrev === "NLE") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <Link to={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team)} className="teamName"><h4>{team.name_display_full}</h4></Link>
                        </div>
                    )
                }
            })

            let nlcTeams = this.props.allTeams.map((team) => {
                if (team.division_abbrev === "NLC") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <Link to={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team)} className="teamName"><h4>{team.name_display_full}</h4></Link>
                        </div>
                    )
                }
            })

            let nlwTeams = this.props.allTeams.map((team) => {
                if (team.division_abbrev === "NLW") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <Link to={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team)} className="teamName"><h4>{team.name_display_full}</h4></Link> 
                        </div>
                    )
                }
            })

        return (
            <div>
            <MainHeader />
            <Row className="content">
            <Col xs={12}>
                <Row>
                    <Col>
                        <h2 className="leagueHeader">American League</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="divBlock">
                        <h3>East</h3>
                        <div>{aleTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>Central</h3>
                        <div className="borders">{alcTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>West</h3>
                        <div>{alwTeams}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="leagueHeader">National League</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="divBlock">
                        <h3>East</h3>
                        <div>{nleTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>Central</h3>
                        <div className="borders">{nlcTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>West</h3>
                        <div>{nlwTeams}</div>
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
        )
    } 
}

function mapStateToProps(state) {
    return {
        allTeams: state.teams.teams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTeamsLoad: () => dispatch(loadAllTeams()),
        onTeamSelect: (id) => dispatch({
            type: "SELECT_TEAM",
            id: id   
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);