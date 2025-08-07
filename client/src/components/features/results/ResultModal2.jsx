import styles from './ResultModal2.module.css'
import SingleStationResult from './SingleStationResult'
import { useNavigate } from 'react-router-dom'

export default function ResultModal2({ stations, onClose }) {
    const navigate = useNavigate()

    if(stations.length === 0) {
        return <p>No stations available...</p>
    }

    const handleBackClick = () => {
        navigate(-1)
    }
  return (
    <div className={styles.resultModal}>
        <div className={styles.icons}>
            <img 
                src="/icons/misc/ArrowBack.png" 
                alt="back-arrow-icon" 
                onClick={handleBackClick}    
                className={styles.backIcon}
            />
            <img 
                src="/icons/misc/Close.png" 
                alt="close-icon" 
                className={styles.closeIcon}
                onClick={onClose}
            />
        </div>
        {stations.map((station) => (
            <SingleStationResult
                key={station.id}
                station={station}
            />
        ))}
    </div>
  )
}
