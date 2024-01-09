import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewMapObjectForm extends React.Component {
  state = {
    pk: 0,
    username: "",
    code: "",
  };

  componentDidMount() {
    if (this.props.map_object) {
      const { pk, username, code, lon, lat } = this.props.map_object;
      this.setState({ pk, username, code, lon, lat });
    }
  }

  onChange = e => {
    this.setState({ [e.target.username]: e.target.value });
  };

  createMapObject = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editMapObject = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.map_object ? this.editMapObject : this.createMapObject}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="code">Code:</Label>
          <Input
            type="textarea"
            name="code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.code)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lon">Longitude:</Label>
          <Input
            type="text"
            name="code"
            onChange={this.onChange}
            onKeyDown={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            value={this.defaultIfEmpty(this.state.lon)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lat">Latitude:</Label>
          <Input
            type="text"
            name="code"
            onChange={this.onChange}
            onKeyDown={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            value={this.defaultIfEmpty(this.state.lat)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewMapObjectForm;