import React, { Component } from 'react';
import { Grid, Col, Row, Button, FormGroup, FormControl, ControlLabel, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadAllTeams } from '../actions/AllTeams_actions';
import '../styles/WSvote.css';

class WSvote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAlTeam: {
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_League_logo.svg/175px-American_League_logo.svg.png',
                name: 'American League'
            },
            selectedNlTeam: {
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MLB_National_League_logo.svg/175px-MLB_National_League_logo.svg.png',
                name: 'National League'
            },
            show: false
        }
    }

    componentDidMount() {
        this.props.onTeamsLoad()
    }

    changeAlLogo = (team) => {
        let res = team.target.value.split(";");
        let newTeam = {
            logo: res[1],
            name: res[0]
        }
        this.setState({selectedAlTeam: newTeam})
    }

    changeNlLogo = (team) => {
        let res = team.target.value.split(";");
        let newTeam = {
            logo: res[1],
            name: res[0]
        }
        this.setState({selectedNlTeam: newTeam})
    }

    handleShow = () => {
        this.setState({show: true});
    }

    handleClose = () => {
        this.setState({show: false});
    }
    
    render() {
        let alTeams = this.props.allTeams.map((team) => {
            if (team.name_abbrev === "CWS") {
                team.name_abbrev = "CHW";
            }
            if (team.league === "AL") {
                return (
                    <option value={team.name_display_full +";http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=175&w=175"}>{team.name_display_full}</option>
                )
            }
        })

        let nlTeams = this.props.allTeams.map((team) => {
            if (team.league === "NL") {
                return (
                    <option value={team.name_display_full +";http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/" + team.name_abbrev + ".png&h=175&w=175"}>{team.name_display_full}</option>
                )
            }
        })

        let alLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_League_logo.svg/175px-American_League_logo.svg.png';
        let nlLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MLB_National_League_logo.svg/175px-MLB_National_League_logo.svg.png';

        return (
            <Grid>
                <Row>
                    <Col>
                        <h1 className="formHeader">Who do you think will make it to the 2018 World Series?</h1>
                        <form>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>American League</ControlLabel>
                                <FormControl onChange={this.changeAlLogo} componentClass="select" placeholder="select">
                                    <option name="all" value={alLogo}>Select Your Pick</option>
                                    {alTeams}
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>National League</ControlLabel>
                                <FormControl onChange={this.changeNlLogo} componentClass="select" placeholder="select">
                                    <option value={nlLogo}>Select Your Pick</option>
                                    {nlTeams}
                                </FormControl>
                            </FormGroup>
                            <Button onClick={this.handleShow}>Submit</Button>
                        </form>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>2018 World Series Prediction</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h2>Thanks for your vote!</h2>
                                <p>
                                We'll see on October 23, 2018 if the {this.state.selectedAlTeam.name} will face the {this.state.selectedNlTeam.name} for the title of World Champions.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <Row className="matchup">
                    <Col>
                        <img src={this.state.selectedAlTeam.logo} alt="AL Team - 2018 World Series Pick"/><span className="versus">vs.</span><img src={this.state.selectedNlTeam.logo} alt="NL Team - 2018 World Series Pick"/>
                    </Col>
                </Row>
            </Grid>
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
        onTeamsLoad: () => dispatch(loadAllTeams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WSvote);