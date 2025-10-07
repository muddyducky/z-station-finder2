import styles from "./Search.module.css";
import SearchByPrice from "./searchByPrice/SearchByPrice.jsx";
import SearchInput from "./SearchInput.jsx";
import { useState } from "react";

//___ Search component that renders the search input and its functionality
export default function Search({ onFilter, placeholder, className, keyword, onShowPriceClick }) {
  const [togglePrice, setTogglePrice] = useState(false);

  return (
    <div className={`${styles.searchPage} ${className}`}>
      <h1>Search Z Stations</h1>
      <div className={styles.searchInput}>
        <SearchInput
          onFilter={onFilter}
          placeholder={placeholder || "Search by location, service, fuel"}
          showResultsDropdown={!onFilter}
          keyword={keyword}
        />
      </div>
      <span>
        <img src="/icons/misc/Geolocation.png" alt="location-icon" />
        <p>Use my current location</p>
      </span>

      {/* ___ Search by price button and functionality */}
      <div className={styles.centerPriceBtn}>
        <SearchByPrice
          className={styles.searchByPrice}
          onFilter={onFilter}
          togglePrice={togglePrice}
          setTogglePrice={setTogglePrice}
          onShowPriceClick={onShowPriceClick}
        />
      </div>
    </div>
  );
}
