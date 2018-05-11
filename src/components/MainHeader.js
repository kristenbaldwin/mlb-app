import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Header.css';
import ReactPlayer from 'react-player';

class MainHeader extends Component {
    render() {
        return (
            <div>
            <Row className="videoPlayer">
                <ReactPlayer url='https://www.youtube.com/watch?v=74LiyrmJn18' playing loop width="100%" />
            </Row>
            <Row>
                <Col sm={12}>
                    <p>Welcome! Select a team to see more details such as roster, year established, and venue name.</p>
                </Col>
            </Row>
            </div>
        )
    }
}

export default MainHeader;