import React, { Component } from 'react';
import { Grid, Col, Row, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/WSvote.css';

class WSvote extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <h1 className="formHeader">Who do you think will make it to the 2018 World Series?</h1>
                        <form>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>American League</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Select Your Pick</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>National League</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Select Your Pick</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </FormControl>
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <img /> vs. <img />
                    </Col>
                </Row> */}
            </Grid>
        )
    }
}

export default WSvote;
