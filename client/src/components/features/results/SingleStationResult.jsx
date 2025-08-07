import styles from './SingleStationResult.module.css'
import Services from './Services'
import OperatingHours from './OperatingHours'

export default function SingleStationResult( { station }) {
    if (!station) {
    return null;
  }

  return (
    <div className={styles.stationResult}>
        <div className={styles.stationName}>
            <h3>{station.name}</h3>
            <p>3km</p>
        </div>
            <p className={styles.region}>
         <img src="/icons/misc/AreaPin.png" alt="area-pin-icon" />
         {station.location.region}
       </p>       
        <OperatingHours
            hours={station.openHours}
        /> 
        <Services 
            className={styles.services}
            services={station.services}
        />
        <img src="/icons/buttons/GetDirections.png" alt="get-directions button" className={styles.getDirections} />
        <div className={styles.phoneNum}>
            <img src="/icons/misc/PhoneBold.png" alt="phone-icon" className={styles.phone} /> 
            <p> 0800 Z ENERGY</p>
        </div>
    </div>
  )
}
