import { useState, useMemo } from 'react';
import Map, { Popup } from 'react-map-gl/maplibre';
import { format } from 'react-string-format';

import CodeMarker from './CodeMarker'

export default function CodeMap({map_objects}) {
    const [popupInfo, setPopupInfo] = useState(null);
    return (
        <Map
            initialViewState={{
                longitude: 0,
                latitude: 0,
                zoom: 2
            }}
            style={{ width: 600, height: 400 }}
            mapStyle={format("https://api.maptiler.com/maps/streets/style.json?key={0}", process.env.REACT_APP_MAPTILER_KEY)}
        >
            {map_objects.map(map_object => (
                <CodeMarker
                    lon={map_object.lon}
                    lat={map_object.lat}
                    onClick={e => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.originalEvent.stopPropagation();
                        setPopupInfo(map_object);
                    }}
                />
            ))}
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