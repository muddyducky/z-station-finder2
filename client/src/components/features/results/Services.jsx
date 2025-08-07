import { useState } from 'react';
import styles from './Services.module.css'

export default function Services({ services, onRemoveService }) {
    const [isOpen, setIsOpen] = useState(false);
    
    
    const toggleDropdown = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const handleRemoveService = (e, name) => {
        e.stopPropagation()
        if (onRemoveService) onRemoveService(name);

    }

  return (
      <div className={`${styles.servicesContainer} ${isOpen ? styles.open : ''}`}>
        {services && services.length > 2 && (
            <img 
              src="/icons/misc/Dropdown.png" 
              alt="dropdown-icon" 
              onClick={toggleDropdown}
              className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ''}`}
            />
          )}
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
