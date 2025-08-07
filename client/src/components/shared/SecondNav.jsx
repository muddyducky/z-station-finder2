import styles from "./SecondNav.module.css";

export default function SecondNav() {
  return (
    <div className={styles.secondNavPage}>
      <ul className={styles.listContainer}>
        <li>
          <span>
            At the station
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </span>
        </li>
        <li>
          <span>
            Power
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </span>
        </li>
        <li>
          <span>
            Rewards and Promotions
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </span>
        </li>
        <li>
          <span>
            Locations
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </span>
        </li>
      </ul>
    </div>
  );
}
