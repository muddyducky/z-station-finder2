import styles from './ResultModal1.module.css'
import StationCard from './StationCard'

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
      {stations.map((station) => (
        <StationCard key={station.id} station={station} />
      ))}
    </div>
  )
}
