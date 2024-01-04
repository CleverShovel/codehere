import React, { Component } from "react";
import { Table } from "reactstrap";
import NewMapObjectModal from "./NewMapObjectModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class MapObjectList extends Component {
  render() {
    const map_objects = this.props.map_objects;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code</th>
            <th>Created at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!map_objects || map_objects.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            map_objects.map(map_object => (
              <tr key={map_object.pk}>
                <td>{map_object.username}</td>
                <td>{map_object.code}</td>
                <td>{map_object.created_at}</td>
                <td align="center">
                  <NewMapObjectModal
                    create={false}
                    map_object={map_object}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={map_object.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default MapObjectList;