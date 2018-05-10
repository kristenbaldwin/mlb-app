import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
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
  render() {
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
                  {/* <NavDropdown eventKey={2} title="Teams" id="basic-nav-dropdown">
                    <MenuItem eventKey={2.1}></MenuItem>
                  </NavDropdown> */}
                  <NavItem eventKey={2} href="/ws-vote">World Series Prediction</NavItem>
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

export default App;
