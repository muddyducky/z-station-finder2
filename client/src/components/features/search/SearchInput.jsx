import { useState } from "react";
import { UseSearchStations } from "../hooks/UseSearchStations.jsx";
import SearchResults from "./InputDropdownList.jsx"; 
import styles from "./SearchInput.module.css";

export default function SearchInput({ placeholder, onFilter, showResultsDropdown = true, keyword = '' }) {
  const [inputValue, setInputValue] = useState(keyword);
  const [showResults, setShowResults] = useState(false);
  const { searchStations, searchResults, loading } = UseSearchStations();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if(onFilter) {
      onFilter(value)
      return;
    }

    if (value.length > 0 ) {
      const query = {
        keyword: value.toLowerCase()
      }
      searchStations(query)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  };


  const handleCloseResults = () => {
    setShowResults(false);
    setInputValue("")
    
  };

  return (
    <form className={styles.searchInput} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        <img
          className={styles.closeIcon}
          src="/icons/misc/Close.png"
          alt="close-icon"
          onClick={handleCloseResults}
        />
      </div>

      <div className={styles.showResult}>
        {showResultsDropdown && showResults && !loading && searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
      </div>

      {loading && <p>Loading...</p>}
    </form>
  );
}