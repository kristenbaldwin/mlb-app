import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Header.css';
import ReactPlayer from 'react-player';

class Header extends Component {
    render() {
        return (
            <div>
            <Row className="videoPlayer">
                <Col>
                    <div>
                        <ReactPlayer url='https://www.youtube.com/watch?v=74LiyrmJn18' playing loop width="100%" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Welcome! Select a team to see more details such as roster, team record, and venue name.</p>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Header;