import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Media } from 'react-bootstrap';

export default class ItemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Button
                    className="item-ditails-button"
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open}
                    variant="link"
                    onClick={() => this.setState({ open: !this.state.open })}>
                    {this.state.open === false ? `See` : 'hide'} item diteils
                {this.state.open === false ? `+` : '-'}
                </Button>
                <Collapse in={this.state.open} >
                    <div id="example-collapse-text">
                        <Media>
                            <img
                                width={100}
                                height={100}
                                alt="tubnail"
                                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                            />
                        </Media>
                        <Media.Body>
                            <p>
                                Essentials by ofm ESS-3085
                            </p>
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong>{`$${this.props.price}`}</strong>
                                    <br />
                                    <strong className="price-srtike">{`$${this.props.price}`}</strong>
                                </Col>
                                <Col md={6}> Qty: 1</Col>
                            </Row>
                        </Media.Body>
                    </div>
                </Collapse>
            </div>
        );
    }
}