import styles from './Screen2.module.css'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultModal from '../../features/results/ResultModal1'
import Navbar from '../../shared/Navbar';
import SecondNav from '../../shared/SecondNav';
import Search from '../../features/search/Search';
import Map from '../../features/map/Map.jsx';
import { regionCoordinates } from '../../features/map/regionCoordinates.js';

//__Displays filteredstations, handles search/filter logic and manages navigation to station details
export default function Screen2() {
  //___ Get stations and keyword from navigation state
  const location = useLocation();
  const navigate = useNavigate();
  const { stations, keyword } = location.state || { stations: [], keyword: '' }

  //___ State for filtered stations based on user input
  const [filteredStations, setFilteredStations] = useState(stations)

  //___ State used to set navigation to screen 2 via 
  const [selectedStation, setSelectedStation] = useState(null)

  //___ Get the region from the first station in filteredStations or set a default
  const region = filteredStations.length > 0 ? filteredStations[0].location.region : null;
  const regionMapCenter = region ? regionCoordinates[region] : { lat: -41.2865, lng: 174.7762 };

  //___ Update filtered stations when the stations prop changes
  useEffect(()=> {
    setFilteredStations(stations)
  }, [stations])

  //___ Handle filtering by keyword
  const handleFilterByKeyword = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = stations.filter(station =>
      station.name.toLowerCase().includes(lowercasedValue) ||
      station.services.some(service => service.name.toLowerCase().includes(lowercasedValue))
      
    );
    setFilteredStations(filtered);
  };

  //___ Handle card click in the results modal
  const handleCardClick = (station) => {
    setSelectedStation(station);
  }

  //___ Render the screen2 component
  return (
    <div className={styles.screen2}>
      <div className={styles.navs}>
        <Navbar/>
        <SecondNav/>
      </div>
    <div className={styles.mapContainer}>

      {/*___ Map displays filtered stations, clicking a marker navigates to a single stations details in /result */}
      <Map
        stations={filteredStations}
        center={regionMapCenter}
        zoom={10}
        onMarkerClick={(station) => {
          setSelectedStation(station);

          //___ Navigate to the result page with the selected station
          navigate('/result', { state: { station } });
        }}
        className={styles.map}
        markerType="station"
      />
      <div className={styles.searchOverlay}>
        {/*___ Search component for filtering stations */}
      <Search
        className={styles.search}
        placeholder={keyword || 'Filter by service or fuel'}
        onFilter={handleFilterByKeyword}
        keyword={keyword}
      />
      {/*___ Display the filtered stations and allow card selection */}
      <ResultModal
        className={styles.resultModal}
        stations={ filteredStations }
        onCardClick={handleCardClick}
      />
    </div>
    </div>


      

    </div>
  )
}
