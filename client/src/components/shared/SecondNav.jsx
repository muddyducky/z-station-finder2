import styles from "./SecondNav.module.css";

export default function SecondNav() {
  return (
    <div className={styles.secondNavPage}>
      <ul className={styles.listContainer}>
        <li>
          <p>
            At the station
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </p>
        </li>
        <li>
          <p>
            Power
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </p>
        </li>
        <li>
          <p>
            Rewards and Promotions
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </p>
        </li>
        <li>
          <p>
            Locations
            <img src="/icons/misc/DropdownBold.png" alt="dropdown-arrow" />
          </p>
        </li>
      </ul>
    </div>
  );
}
