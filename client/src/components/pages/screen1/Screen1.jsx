import styles from "./Screen1.module.css";
import Search from "../../features/search/Search";
import Navbar from "../../shared/Navbar.jsx";
import SecondNav from "../../shared/SecondNav.jsx";
import Map from "../../features/map/Map.jsx";
import { regionCoordinates } from "../../features/map/regionCoordinates.js";
import { UseSearchStations } from "../../features/hooks/UseSearchStations.jsx";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

//___ Screen1 component that renders the search and map components
export default function Screen1() {
  const [toggleShowPriceBtn, setToggleShowPriceBtn] = useState(false);
  const navigate = useNavigate();

  //___ Map center coordinates
  const nationalMap = { lat: -41.2865, lng: 174.7762 };

  //___ Reference to the last selected region
  const lastRegion = useRef(null);

  const { searchStations, searchResults } = UseSearchStations();

  //___ Map region names to their coordinates
  const regionStations = Object.keys(regionCoordinates).map((regionName, index) => {
    const coordinates = regionCoordinates[regionName];
    return {
      id: index,
      name: regionName,
      coordinates: {
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      },
    };
  });

  //___ Function to handle the maps region marker clicks
  const handleRegionClick = async (regionMarker) => {
    lastRegion.current = regionMarker.name;
    await searchStations({ keyword: regionMarker.name });

    //___ Navigate to the search results page after a short delay
    setTimeout(() => {
      if (searchResults.length > 0) {
        navigate("/search", {
          state: {
            stations: searchResults,
          keyword: lastRegion.current,
        },
      });
      lastRegion.current = null;
    }
  }, 100 );
  };

  //___ Function to handle cluster clicks in the map
  const handleClusterClick = async (cluster) => {

    //___ Get the markers from the cluster and extract their region names
    const markers = cluster.getMarkers();
    const clusteredRegionNames = markers
      .map((marker) => marker.regionName)
      .filter(Boolean);

    //___ If there are region names, search for stations in the first region
    if (clusteredRegionNames.length > 0) {
      const keyword = clusteredRegionNames[0]; 
      lastRegion.current = keyword;
      await searchStations({ keyword });
    }
  };
  
  //___ Effect to navigate to the search results page when searchResults changes
  useEffect(() => {
    if (lastRegion.current && searchResults.length > 0) {
      navigate("/search", {
        state: {
          stations: searchResults,
          keyword: lastRegion.current,
        },
      });
      lastRegion.current = null;
    }
  }, [searchResults, navigate]);

  //___ Render the screen1 component
  return (
    <div className={styles.screen1Page}>
      <div className={styles.navs}>
        <Navbar />
        <SecondNav />
      </div>
      <div className={styles.mapContainer}>
        <Search
          className={styles.searchOverlay}
          onShowPriceClick={() => setToggleShowPriceBtn(!toggleShowPriceBtn)}
        />
        <Map
          stations={regionStations}
          center={nationalMap}
          zoom={5.5}
          onMarkerClick={handleRegionClick}
          onClusterClick={handleClusterClick}
          cluster={true}
          markerType={toggleShowPriceBtn ? "regionDark" : "regionOrange"}
        />
      </div>
    </div>
  );
}




