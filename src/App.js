import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { loadAllTeams } from './actions/AllTeams_actions';
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
    //   return a.name_display_full - b.name_display_full;
    // });
    // console.log("see teams", allTeams);

    let allTeams = this.props.allTeams.map((team, i) => {
        let number = i + 1;
        return (
          <MenuItem key={number} eventKey={number}>{team.name_display_full}</MenuItem>
        )
    })

    return (
        <BrowserRouter>
        <Grid fluid={true}>
          <div className="App">
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">| MLB Teams |</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="/">Home</NavItem>
                  <NavDropdown eventKey={2} title="Teams" id="basic-nav-dropdown">
                    {allTeams}
                  </NavDropdown>
                  <NavItem eventKey={3} href="/ws-vote">World Series Prediction</NavItem>
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
      onTeamsLoad: () => dispatch(loadAllTeams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
