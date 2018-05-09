import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Team from './components/Team';

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
            <Navbar collapseOnSelect className="navbar">
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">MLB Teams |</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="/">Home</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/team/:name" component={Team} />
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
