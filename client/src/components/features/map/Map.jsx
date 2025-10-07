import { useState } from "react";
//___ Import to use the GoogleMap component
import { GoogleMap } from "@react-google-maps/api";
import { useMapLoader } from "./MapLoader.jsx";
import  useMapMarkers  from "./useMapMarkers.js";

//__ Set map container style
const containerStyle = {
  width: "100%",
  height: "900px",
};

//___ Pass props to the GoogleMap component
export default function Map({
  stations = [],
  center,
  zoom = 8,
  cluster = false,
  onMarkerClick,
  onClusterClick,
  markerType = 'station',
  className = "",
}) {
  //___ Map loading state
  const { isLoaded, loadError } = useMapLoader();
  const [map, setMap] = useState(null);

  //___ Use custom hook to manage map markers
  useMapMarkers(
    map,
    stations,
    cluster,
    onMarkerClick,
    onClusterClick,
    markerType
  );

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;


  return (
    <div className={className}>
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        //__ OnLoad passes a map instance to the setMap function
        //... and onUnmount sets it back to null
        onLoad={(mapInstance) => {
          setMap(mapInstance)
        }}
        onUnmount={() => {
          setMap(null);
        }}
        options={{ fullscreenControl: false }}
      />
    </div>
  );
}

