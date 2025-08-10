import styles from "./Screen3.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import SecondNav from "../../shared/SecondNav";
import ResultModal from "../../features/results/ResultModal2";
import Search from "../../features/search/Search";
import Map from "../../features/map/Map";

//___ Screen3 component that displays the details of a single station
export default function Screen3() {
  const location = useLocation();

  //___ Get the station data from the location state
  const { station } = location.state || { station: {} };

  //___ State to manage the filtered station and modal visibility
  const [filteredStation, setFilteredStation] = useState(station);
  const [isModalOpen, setIsModalOpen] = useState(true)

  //___ Get the map center coordinates from the filtered station
  const mapCenter =
    filteredStation?.coordinates?.latitude &&
    filteredStation?.coordinates?.longitude
      ? {
          lat: filteredStation.coordinates.latitude,
          lng: filteredStation.coordinates.longitude,
        }
      : { lat: -41.2865, lng: 174.7762 }

  //___ Update the filtered station when the station prop changes
  useEffect(() => {
    setFilteredStation(station);
  }, [station]);

  //___ Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!filteredStation || !filteredStation.id) {
    return <p>No station data available.</p>;
  }

  //___ Render the screen3 component
  return (
    <div className={styles.screen3}>
      <div className={styles.navs}>
        <Navbar />
        <SecondNav />
      </div>
    <div className={styles.mapContainer}>
      <Map
        className={styles.map}
        stations={[filteredStation]}
        center={mapCenter}
        zoom={15}
        markerType='station'

      />
      <div className={styles.searchOverlay}>
        <Search 
        placeholder={filteredStation.name}
        
        />
        {isModalOpen && (
          <ResultModal
            className={styles.resultModal}
            stations={[filteredStation]}
            onClose={closeModal}
          />
)}

      </div>

    </div>
    </div>
  );
}
