import styles from "./OperatingHours.module.css";
import GetFormattedHours from "../../../utils/FormattedHours";
import { useState } from "react";

export default function OperatingHours({ hours }) {
  const [isOpen, setIsOpen] = useState(true);
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const formattedHours = GetFormattedHours(hours);

  if (!formattedHours || formattedHours.length === 0) {
    return null;
  }

  const toggleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };
  console.log("GetFormattedHours output:", formattedHours);

  return (
    <div className={styles.operatingHoursContainer}>
      <p>
        Open Hours{" "}
        <img
          src="/icons/misc/Dropdown.png"
          alt=""
          onClick={toggleDropdownClick}
          className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
        />
      </p>
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
