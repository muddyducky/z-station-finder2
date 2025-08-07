import styles from './Screen2.module.css'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResultModal from '../../features/results/ResultModal1'
import Navbar from '../../shared/Navbar';
import SecondNav from '../../shared/SecondNav';
import Search from '../../features/search/Search';

export default function Screen2() {
  const location = useLocation();
  const { stations, keyword } = location.state || { stations: [], keyword: '' }

  const [filteredStations, setFilteredStations] = useState(stations)

  useEffect(()=> {
    setFilteredStations(stations)
  }, [stations])

  const handleFilterByKeyword = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = stations.filter(station =>
      station.name.toLowerCase().includes(lowercasedValue) ||
      station.services.some(service => service.name.toLowerCase().includes(lowercasedValue))
    );
    setFilteredStations(filtered);
  };

  if(stations.length === 0) {
    return <p>No stations were found for this search</p>
  }

  return (
    <div className={styles.screen2}>
      <Navbar
        className={styles.nav}
      />
      <SecondNav
        className={styles.secondNav}
      />
      <Search
        className={styles.search}
        placeholder={keyword || 'Filter by service or fuel'}
        onFilter={handleFilterByKeyword}
        keyword={keyword}
      />
      <ResultModal
        className={styles.resultModal}
        stations={ filteredStations }
      />

      

    </div>
  )
}
