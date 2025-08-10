import styles from "./OperatingHours.module.css";

//___ GetFormattedHours utility that formats the operating hours
import GetFormattedHours from "../../../utils/FormattedHours";
import { useState } from "react";

//__ OperatingHours component that displays the operating hours of a station
export default function OperatingHours({ hours }) {

  //__ State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(true);

  //___ Array for days of the week to use in the dropdown
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const formattedHours = GetFormattedHours(hours);

  if (!formattedHours || formattedHours.length === 0) {
    return null;
  }

  //___ Function to toggle the dropdown visibility
  const toggleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.operatingHoursContainer}>
      <p>
        Open Hours{" "}
        <img
          src="/icons/misc/Dropdown.png"
          alt="dropdown-icon"

          //___ Add a click listener to the dropdown icon
          onClick={toggleDropdownClick}
          className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
        />
      </p>

      {/* Dropdown list for operating hours */}
      {isOpen && (
        <div className={`${styles.hoursList} ${!isOpen ? styles.closed : "" }`}>
          {daysOfWeek.map((day, index) => (
            <div key={day} className={styles.hourItem}>
              <p className={styles.day}>{day}</p>
              <p className={styles.time}>{formattedHours[index]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
