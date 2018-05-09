import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <Row className="footer">
                    <Col>
                        <div>
                            MLB Teams &#169; 2018
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;