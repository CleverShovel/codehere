import React from "react";
import { Marker } from 'react-map-gl/maplibre';

export default function CodeMarker({ lon, lat, onClick, markerSrc }) {
    return <Marker longitude={lon} latitude={lat} anchor="bottom" onClick={onClick}>
        <img src={markerSrc} width="30" height="50" />
    </Marker>
}