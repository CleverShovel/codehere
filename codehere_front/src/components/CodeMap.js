import { useState, useMemo } from 'react';
import Map, { Popup } from 'react-map-gl/maplibre';
import { format } from 'react-string-format';

import CodeMarker from './CodeMarker'

import code_marker from './code_marker.png';
import new_code_marker from './new_code_marker.png'

export default function CodeMap({ map_objects, style, setNewCodePos }) {
    const [popupInfo, setPopupInfo] = useState(null);
    const [newCodeMarker, setNewCodeMarker] = useState(null);

    if (style === undefined) {
        style = { "width": 600, "height": 400 };
    }

    function handleClick(e) {
        setNewCodePos(e.lngLat.lng, e.lngLat.lat);
        setNewCodeMarker({
            "lon": e.lngLat.lng,
            "lat": e.lngLat.lat
        });
    }

    return (
        <Map
            initialViewState={{
                longitude: 0,
                latitude: 0,
                zoom: 2
            }}
            style={style}
            mapStyle={format("https://api.maptiler.com/maps/streets/style.json?key={0}", process.env.REACT_APP_MAPTILER_KEY)}
            onClick={handleClick}
        >
            {map_objects.map((map_object, idx) => (
                <CodeMarker
                    key={idx}
                    lon={map_object.lon}
                    lat={map_object.lat}
                    onClick={e => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.originalEvent.stopPropagation();
                        setPopupInfo(map_object);
                    }}
                    markerSrc={code_marker}
                />
            ))}

            {newCodeMarker && (
                <CodeMarker 
                    lon={newCodeMarker.lon}
                    lat={newCodeMarker.lat}
                    markerSrc={new_code_marker}
                />
            )}

            {popupInfo && (
                <Popup longitude={popupInfo.lon} latitude={popupInfo.lat}
                    anchor="bottom"
                    onClose={() => setPopupInfo(null)}>
                    <p>Username: {popupInfo.username}</p>
                    <p>Code:</p>
                    <p>{popupInfo.code}</p>
                </Popup>)}
        </Map>
    );
}