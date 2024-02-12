import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import NewMapObjectOnPage from "./NewMapObjectOnPage";
import CodeMap from "./CodeMap";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    map_objects: [],
    newCodePos: {
      "lon": null,
      "lat": null
    }
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

  setNewCodePos = (lon, lat) => {
    this.setState(() => ({
      newCodePos: {
        "lon": lon,
        "lat": lat
      }
    }));
  }

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Container fluid className="d-none d-md-block">
          <Row>
            <Col md="8">
                <CodeMap
                  map_objects={this.state.map_objects}
                  style={{ width: '100%', height: '100%' }}
                  setNewCodePos={this.setNewCodePos}
                />
            </Col>
            <Col md="auto">
                <NewMapObjectOnPage
                  resetState={this.resetState}
                  lon={this.state.newCodePos.lon}
                  lat={this.state.newCodePos.lat} />
            </Col>
          </Row>
        </Container>
        <Container fluid className="d-block d-md-none">
          <Row>
            <CodeMap
              map_objects={this.state.map_objects}
              setNewCodePos={this.setNewCodePos}
            />
          </Row>
          <Row>
            <NewMapObjectOnPage
              resetState={this.resetState}
              lon={this.state.newCodePos.lon}
              lat={this.state.newCodePos.lat} />
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;