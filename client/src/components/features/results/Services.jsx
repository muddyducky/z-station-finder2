import { useState } from 'react';
import styles from './Services.module.css'

//___ Services component that displays a list of services
export default function Services({ services, onRemoveService }) {
    const [isOpen, setIsOpen] = useState(false);

    //___ Function to toggle the dropdown
    const toggleDropdown = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    //___ Function to handle service removal
    const handleRemoveService = (e, name) => {
        e.stopPropagation()
        if (onRemoveService) onRemoveService(name);

    }

  return (
    //___ Render the services list and dropdown icon
      <div className={`${styles.servicesContainer} ${isOpen ? styles.open : ''}`}>
        {services && services.length > 2 && (
            <img 
              src="/icons/misc/Dropdown.png" 
              alt="dropdown-icon"

              //___ Toggle dropdown on click
              onClick={toggleDropdown}
              className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ''}`}
            />
          )}

          {/* Render the services list */}
        {services && services.map((service) => {
          return (
            <div key={service._id || service.id} className={styles.buttons}>
              <button>
                <span>
                  {service.name} 
                  <img 
                    src="/icons/misc/Close.png" 
                    alt="closeIcon" 
                    className={styles.closeButtonIcon}
                    
                    //___ Remove service on click
                    onClick={(e) => handleRemoveService(e, service?.name)}    
                />
                </span>
              </button>
              
            </div>
          );
        })}
      </div>
  )
}
