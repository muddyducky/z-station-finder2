import styles from './InputDropdownList.module.css';
import { useNavigate } from 'react-router-dom';

//___ Dropdown list component that displays search results
export default function SearchResults({ searchResults }) {
  const navigate = useNavigate()

  if (searchResults.length === 0) {
    return <p className={styles.noResults}>No results found.</p>;
  }

  //___ Function to navigate to the search results page based on what a user has input in /
  const handleStationClick = () => {
    navigate("/search", { state: { stations: searchResults }})
  }

  //___ Render a list of stations matching the user's input  
    return (
    <ul className={styles.results}>
      {searchResults.map((station) => (
        <li key={station.id} className={styles.resultItem} onClick={() => handleStationClick(station)}>
          <p className={styles.stationName}>
            {station.name}
          </p>
          <img src="/icons/misc/PetrolPump.png" alt="pump-icon" />
        </li>
        
      ))}
    </ul>
  );
}