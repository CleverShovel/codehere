import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import axios from "axios";

import equal from 'fast-deep-equal'

import { API_URL } from "../constants";

class NewMapObjectForm extends React.Component {
  state = {
    pk: 0,
    username: "",
    code_language: "",
    code: "",
    lon: "",
    lat: "",
    dropdownOpen: false,
  };

  componentDidMount() {
    if (this.props.map_object) {
      const { pk, username, code_language, code, lon, lat } = this.props.map_object;
      this.setState({ pk, username, code_language, code, lon, lat });
    }
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.map_object, prevProps.map_object)) {
      const { pk, username, code_language, code, lon, lat } = this.props.map_object;
      this.setState({ pk, username, code_language, code, lon, lat });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createMapObject = e => {
    e.preventDefault();

    const map_object = {
      pk: this.state.pk,
      username: this.state.username,
      code_language: this.state.code_language,
      code: this.state.code,
      lon: this.state.lon,
      lat: this.state.lat,
    }

    axios.post(API_URL, map_object).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editMapObject = e => {
    e.preventDefault();

    const map_object = {
      pk: this.state.pk,
      username: this.state.username,
      code_language: this.state.code_language,
      code: this.state.code,
      lon: this.state.lon,
      lat: this.state.lat,
    }

    axios.put(API_URL + this.state.pk, map_object).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  toggle = () => {
    this.setState(previous => ({
      dropdownOpen: !previous.dropdownOpen
    }));
  };

  setDropdownValue = (val) => {
    this.setState({ code_language: val });
  }

  render() {
    const code_languages = ["Python", "C#", "C++", "JavaScript", "Java"]
    return (
      <Form onSubmit={this.props.isEdit ? this.editMapObject : this.createMapObject}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            defaultValue={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="code_language">Code language:</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="down">
            <DropdownToggle caret>{this.state.code_language}</DropdownToggle>
            <DropdownMenu>
              {code_languages.map((lang, idx) => (
                <DropdownItem key={idx} onClick={() => this.setDropdownValue(lang)}>{lang}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup>
          <Label for="code">Code:</Label>
          <Input
            type="textarea"
            name="code"
            onChange={this.onChange}
            defaultValue={this.defaultIfEmpty(this.state.code)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lon">Longitude:</Label>
          <Input
            type="text"
            name="lon"
            onChange={this.onChange}
            disabled={true}
            defaultValue={this.defaultIfEmpty(this.state.lon)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lat">Latitude:</Label>
          <Input
            type="text"
            name="lat"
            onChange={this.onChange}
            disabled={true}
            defaultValue={this.defaultIfEmpty(this.state.lat)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewMapObjectForm;