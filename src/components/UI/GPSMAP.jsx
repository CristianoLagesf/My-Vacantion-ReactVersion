import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 43.651070,
            lng: -79.347015
        },
        zoom: 8
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={43.651070}
                    lng={-79.347015}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}