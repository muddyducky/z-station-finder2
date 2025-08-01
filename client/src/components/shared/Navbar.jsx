import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navPage}>

        <ul className={styles.leftContainer}>
          <li>
            <img src="icons/logo/Logo.png" alt="Z-logo" />
          </li>
          <li>
            <img src="icons/buttons/Header1.png" alt="button" />
          </li>
          <li>
            <p>For business</p>
          </li>
        </ul>
      
        <ul className={styles.rightContainer}>
          <li><p>Z App</p></li>
          <li><p>About Z</p></li>
          <li>
            <img src="/icons/misc/SearchBold.png" alt="search-icon" className={styles.searchIcon}/>
          </li>
          <li>
            <img src="/icons/buttons/Login.png" alt="login-button" />
          </li>
        </ul>
    </div>
  );
}
