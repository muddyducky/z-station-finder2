import { useState } from "react";
import styles from "./StationCard.module.css";
import Services from "./Services.jsx";
import { useNavigate } from "react-router-dom";

//___ Component that displays a single station 
export default function StationCard({ station  }) {

  //__ Set state for services 
  const [services, setServices] = useState(station.services || [])
  const navigate = useNavigate()

  //___ Function to remove a service from the list
  const handleRemoveService = (name) => {
    setServices(prev => prev.filter(service => service?.name !== name))
  }

  //___ Function to handle click on the station card
  const handleStationClick = () => {
    navigate('/result', { state: { station: station}})
  }

  //___ Render the station card
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

        {/* Stop propagation allows the child element effects to work while not triggerring the parent element's onClick event  */}
        <p>Open now <img src="icons/misc/Dropdown.png" alt="dropdown-icon" onClick={(e) => e.stopPropagation()}/></p>
      </div>
      <div className={styles.getDirections}>
        <img src="/icons/buttons/GetDirectionsSubtle.png" alt="get-directions-icon" />
        <img src="icons/misc/ArrowFront.png" alt="forward-arrow-icon" className={styles.forwardArrow}/>
      </div>
    </div>
  );
}
