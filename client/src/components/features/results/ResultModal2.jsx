import styles from './ResultModal2.module.css'

//___ SingleStationResult component that displays a single station
import SingleStationResult from './SingleStationResult'

//___ useNavigate for navigation between UI routes
import { useNavigate } from 'react-router-dom'

export default function ResultModal2({ stations, onClose }) {
    const navigate = useNavigate()

    if(stations.length === 0) {
        return <p>No stations available...</p>
    }

    //___ Function to handle back button click
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
        
        {/* Render a SingleStationResult for each station */}
        {stations.map((station) => (
            <SingleStationResult
                key={station.id}
                station={station}
            />
        ))}
    </div>
  )
}
