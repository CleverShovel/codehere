import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import NewMapObjectOnPage from "./NewMapObjectOnPage";
import CodeMap from "./CodeMap";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    map_objects: []
  };

  componentDidMount() {
    this.resetState();
  }

  getMapObjects = () => {
    axios.get(API_URL).then(res => this.setState({ map_objects: res.data }));
  };

  resetState = () => {
    this.getMapObjects();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <CodeMap
              map_objects={this.state.map_objects}
            />
          </Col>
          <Col>
            <NewMapObjectOnPage
              resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;