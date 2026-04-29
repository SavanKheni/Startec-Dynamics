import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  const globeRef = useRef();
  const [coords, setCoords] = useState({ lat: 20, lng: 78 }); // default India

  // Get user location via IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCoords({
          lat: data.latitude,
          lng: data.longitude,
        });
      });
  }, []);

  // Move globe to user country
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: coords.lat, lng: coords.lng, altitude: 2 },
        2000,
      );
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      //   controls.enableRotate = false;
    }
  }, [coords]);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundColor="rgba(0,0,0,0)"
    />
  );
};

export default GlobeComponent;
