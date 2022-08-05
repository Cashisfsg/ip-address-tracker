import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';

function MyComponent({coords}) {
    const map = useMap();
    map.flyTo({lat: coords[0], lng: coords[1]}, map.getZoom());
    return null;
  }

const Map = ({coords}) => {
    return (
        <MapContainer 
            style={{width: '100%', height: 'calc(100vh)'}} 
            center={coords} 
            zoom={13}
            zoomControl={false}
            scrollWheelZoom={true}
        >
            <MyComponent coords={coords}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
