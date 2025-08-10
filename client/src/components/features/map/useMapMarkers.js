import { useEffect, useRef } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

//__ Custom hook to manage map markers
//... props: the map instance, stations data, clustering option, and click handlers
export function useMapMarkers(
  map,
  stations,
  cluster,
  onMarkerClick,
  onClusterClick,
  markerType
) {

  //___ Storage for markers and clusterer
  const markersRef = useRef([]);
  const clustererRef = useRef(null);

  //___ Effect to manage markers and clusterer
  useEffect(() => {
    if (!map) return;
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
    if (clustererRef.current) {
      clustererRef.current.clearMarkers();
      clustererRef.current = null;
    }

    //___ Create marker icons
    const markerIcons = {
      station: '/icons/map/zMapMarker.png',
      regionOrange: '/icons/map/AreaPinOrange.png',
      regionDark: '/icons/map/AreaPinDark.png',
      priceMarker: '/icons/map/PriceMarker.png',
      priceMarkerDark: '/icons/map/PriceMarkerDark.png',
    };

    //___ Get the current icon path
    const currentIconPath = markerIcons[markerType] || markerIcons.station;

    //___ Create markers by filtering stations and adding event listeners
    const markers = stations
      .filter(
        (station) =>
          station.coordinates?.latitude && station.coordinates?.longitude
      )

      //___ Create a new marker for each station
      .map((station) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: station.coordinates.latitude,
            lng: station.coordinates.longitude,
          },
          map: map,
          icon: {
            url: currentIconPath,
            scaledSize: new window.google.maps.Size(80, 80),
          },
        });
        //___ Add region name and click listener
        marker.regionName = station.name;
        marker.addListener("click", () => {
          if (onMarkerClick) {
            onMarkerClick(station);
          }
        });
        return marker;
      });
    //___ Set markers to the reference
    markersRef.current = markers;
    
    //___ Create a marker clusterer if clustering is enabled
    if (cluster && markers.length > 0) {
      clustererRef.current = new MarkerClusterer({
        map,
        markers,
        onClusterClick: (e, cluster) => {
          if (onClusterClick) {
            onClusterClick(cluster);
          }
        },
      });
    }

    //___ Cleanup markers and clusterer on unmount
    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      if (clustererRef.current) clustererRef.current.clearMarkers();
    };

  }, [map, stations, cluster, markerType, onMarkerClick, onClusterClick]);
}



