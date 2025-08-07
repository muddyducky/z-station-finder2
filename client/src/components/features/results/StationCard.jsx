import { useState } from "react";
import styles from "./StationCard.module.css";
import Services from "./Services.jsx";
import { useNavigate } from "react-router-dom";

export default function StationCard({ station  }) {
  const [services, setServices] = useState(station.services || [])
  const navigate = useNavigate()


  const handleRemoveService = (name) => {

    setServices(prev => prev.filter(service => service?.name !== name))
  }

  const handleStationClick = () => {
    navigate('/result', { state: { station: station}})
  }

  return (
    <div 
      className={styles.stationCard} 
      onClick={handleStationClick}
    >

      <div className={styles.stationName}>
        <h3>{station.name}</h3>
        <p>3 km</p>
      </div>

      <p className={styles.region}>
        <img src="/icons/misc/AreaPin.png" alt="area-pin-icon" />
        {station.location.region}
      </p>

    <Services
      key={station.id}
      services={services}
      onRemoveService={handleRemoveService}
    />

      <div className={styles.openHours}>
        <p>Open now <img src="icons/misc/Dropdown.png" alt="dropdown-icon" onClick={(e) => e.stopPropagation()}/></p>
      </div>
      <div className={styles.getDirections}>
        <img src="/icons/buttons/GetDirectionsSubtle.png" alt="get-directions-icon" />
        <img src="icons/misc/ArrowFront.png" alt="forward-arrow-icon" className={styles.forwardArrow}/>
      </div>
    </div>
  );
}
