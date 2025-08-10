import styles from './ResultModal1.module.css'

//__ StationCard component that displays a single station
import StationCard from './StationCard'

//__ ResultModal component that displays a list of stations
export default function ResultModal({ stations }) {
  if(stations.length === 0) {
    return <p>No stations available...</p>
  }
  return (
    <div className={styles.resultModal}>
        <div className={styles.icons}>
          <img src="/icons/misc/Filter.png" alt="filter-icon" />
          <img src="/icons/misc/Sort.png" alt="sort-icon" />
          <img src="/icons/misc/Close.png" alt="closeIcon" className={styles.closeIcon}/>
        </div>
        <p>showing {stations.length} results </p>

      {/* Render a StationCard for each station */}
      {stations.map((station) => (
        <StationCard 
          key={station.id} 
          station={station} 
        />
      ))}
    </div>
  )
}
