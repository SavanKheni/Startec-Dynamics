import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const MoonComponent = () => {
  const moonRef = useRef();

  useEffect(() => {
    if (moonRef.current) {
      // Fixed camera angle
      moonRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2 }, 0);

      // Disable interactions
      const controls = moonRef.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;

      // Optional slow rotation
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.2;
    }
  }, []);

  return (
    <Globe
      ref={moonRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/moon.jpg"
      backgroundColor="rgba(0,0,0,0)"
    />
  );
};

export default MoonComponent;
