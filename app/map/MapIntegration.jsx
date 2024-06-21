'use client';

import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const MapIntegration = () => {
    const defaultProps = {
        center: {
            lat: 30.3753,
            lng: 69.3451
        },
        zoom: 8
    };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={69.3451}
                    lng={30.3753}
                    text="Pakistan"
                />
            </GoogleMapReact>
        </div>

    );
};

export default MapIntegration;
