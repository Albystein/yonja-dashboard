import React from "react";

import GoogleMapReact from "google-map-react";

const coordinates = [
  {
    lat: "0.323114",
    lng: "32.576379"
  },
  {
    lat: "0.321667",
    lng: "32.597508"
  },
  {
    lat: "0.319809",
    lng: "32.594459"
  },
  {
    lat: "0.316666",
    lng: "32.591946"
  },
  {
    lat: 0.319402,
    lng: 32.586395
  }
];

const Marker = () => (
  <div
    style={{
      height: 16,
      width: 16,
      backgroundColor: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50
    }}
  >
    <div
      style={{
        width: 6,
        height: 6,
        backgroundColor: "#111113",
        borderRadius: 50
      }}
    ></div>
  </div>
);

const Map = props => {
  const center = {
    lat: 0.319402,
    lng: 32.586395
  };
  const zoom = 14;
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBws6z5GqhwZ6MiDyMRL32napv0PSK-7FI" }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {coordinates.map(location => (
        <Marker lat={location.lat} lng={location.lng} />
      ))}
    </GoogleMapReact>
  );
};

export default Map;
