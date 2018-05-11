import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import { loadAllTeams } from './actions/AllTeams_actions';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './components/Home';
import Footer from './components/Footer';
import Team from './components/Team';
import WSvote from './components/WSvote';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.onTeamsLoad()
  }

  render() {
    // let allTeams = this.props.allTeams.sort(function (a, b) {
    //   return a.name_display_short - b.name_display_short;
    // });
    // console.log("see teams", allTeams);

    let allTeams = this.props.allTeams.map((team, i) => {
        let number = i + .1;
        return (
          <LinkContainer to={"/team/" + team.team_id} key={number}>
            <MenuItem eventKey={number} onClick={() => this.props.onTeamSelect(team)}>{team.name_display_full}</MenuItem>
          </LinkContainer>
        )
    })

    return (
        <BrowserRouter>
        <Grid fluid={true}>
          <div className="App">
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <LinkContainer to="/">
                    <a href="/">| MLB Teams |</a>
                  </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <LinkContainer to='/'>
                    <NavItem>Home</NavItem>
                  </LinkContainer>
                  <NavDropdown eventKey={2} title="Teams" id="basic-nav-dropdown">
                    {allTeams}
                  </NavDropdown>
                  <LinkContainer to ='/ws-vote'>
                    <NavItem>World Series Prediction</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/team/:name" component={Team} />
              <Route path="/ws-vote" component={WSvote} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
          </Grid>
        </BrowserRouter>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
