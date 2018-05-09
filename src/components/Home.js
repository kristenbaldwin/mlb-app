import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import '../styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            aleTeams: [],
            alcTeams: [],
            alwTeams: [],
            nleTeams: [],
            nlcTeams: [],
            nlwTeams: []
        }
    };

    componentDidMount() {
        fetch('http://lookup-service-prod.mlb.com/json/named.team_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&all_star_sw=%27N%27')
        .then(results => {
            return results.json();
        }).then(data => {
            let teams = data.team_all.queryResults.row;
            this.setState({teams: teams});

            let aleTeams = this.state.teams.map((team) => {
                if (team.division_abbrev === "ALE") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <a href={"/team/" + team.team_id} onClick={() => this.props.onTeamSelect(team.team_id)} className="teamName"><h4>{team.name_display_full}</h4></a>
                        </div>
                    )
                }
            })
            this.setState({aleTeams: aleTeams}) 
            console.log('aleteams:', this.state.aleTeams);

            let alcTeams = this.state.teams.map((team) => {
                if (team.name_abbrev === "CWS") {
                    team.name_abbrev = "CHW";
                }
                if (team.division_abbrev === "ALC") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <a href={"/team/" + team.team_id} className="teamName"><h4>{team.name_display_full}</h4></a>
                        </div>
                    )
                }
            })
            this.setState({alcTeams: alcTeams}) 

            let alwTeams = this.state.teams.map((team) => {
                if (team.division_abbrev === "ALW") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <a href={"/team/" + team.team_id} className="teamName"><h4>{team.name_display_full}</h4></a>
                        </div>
                    )
                }
            })
            this.setState({alwTeams: alwTeams}) 

            let nleTeams = this.state.teams.map((team) => {
                if (team.division_abbrev === "NLE") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <a href={"/team/" + team.team_id} className="teamName"><h4>{team.name_display_full}</h4></a>
                        </div>
                    )
                }
            })
            this.setState({nleTeams: nleTeams}) 

            let nlcTeams = this.state.teams.map((team) => {
                if (team.division_abbrev === "NLC") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <a href={"/team/" + team.team_id} className="teamName"><h4>{team.name_display_full}</h4></a>
                        </div>
                    )
                }
            })
            this.setState({nlcTeams: nlcTeams}) 

            let nlwTeams = this.state.teams.map((team) => {
                if (team.division_abbrev === "NLW") {
                    return (
                        <div key={team.name_display_full} className="teamBlock">
                            <img src={"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=50&w=50"} alt={team.name_display_full}/>
                            <a href={"/team/" + team.team_id} className="teamName"><h4>{team.name_display_full}</h4></a>
                        </div>
                    )
                }
            })
            this.setState({nlwTeams: nlwTeams}) 
        })
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <h2 className="leagueHeader">American League</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="divBlock">
                        <h3>East</h3>
                        <div>{this.state.aleTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>Central</h3>
                        <div className="borders">{this.state.alcTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>West</h3>
                        <div>{this.state.alwTeams}</div>
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
                        <div>{this.state.nleTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>Central</h3>
                        <div className="borders">{this.state.nlcTeams}</div>
                    </Col>
                    <Col sm={4} className="divBlock">
                        <h3>West</h3>
                        <div>{this.state.nlwTeams}</div>
                    </Col>
                </Row>
            </div>
        )
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        onTeamSelect: (id) => dispatch({
            type: "SELECT_TEAM",
            id: id
        })
    }
}

export default connect(mapDispatchToProps)(Home);