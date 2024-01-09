import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import MapObjectList from "./MapObjectList";
import NewMapObjectModal from "./NewMapObjectModal";
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
        </Row>
        <Row>
          <Col>
            <NewMapObjectModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;