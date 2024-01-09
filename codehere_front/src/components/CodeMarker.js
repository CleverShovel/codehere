import React, { Component, createRef } from "react";
import { Marker } from 'react-map-gl/maplibre';

import code_marker from './code_marker.png';

class CodeMarker extends Component {
    render() {
        const lon = this.props.lon;
        const lat = this.props.lat;
        const onClick = this.props.onClick
        return <Marker longitude={lon} latitude={lat} anchor="bottom" onClick={onClick}>
            <img src={code_marker} width="30" height="50"/>
        </Marker>
    }
}

export default CodeMarker;
