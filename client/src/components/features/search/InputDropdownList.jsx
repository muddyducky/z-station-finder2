import styles from './InputDropdownList.module.css';
import { useNavigate } from 'react-router-dom';

export default function SearchResults({ searchResults }) {
  const navigate = useNavigate()

  if (searchResults.length === 0) {
    return <p className={styles.noResults}>No results found.</p>;
  }

  const handleStationClick = () => {
    navigate("/search", { state: { stations: searchResults }})
  }

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