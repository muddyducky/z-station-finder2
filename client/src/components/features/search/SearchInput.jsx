import { useState } from "react";
import { UseSearchStations } from "../hooks/UseSearchStations.jsx";
import SearchResults from "./InputDropdownList.jsx"; 
import styles from "./SearchInput.module.css";

//___ Search input component that handles user input and displays search results
export default function SearchInput({ placeholder, onFilter, showResultsDropdown = true, keyword = '' }) {

  //___ State for the input value and search results
  const [inputValue, setInputValue] = useState(keyword);
  const [showResults, setShowResults] = useState(false);
  const { searchStations, searchResults, loading } = UseSearchStations();

  //___ Function to handle changes in the search input
  const handleChange = (e) => {

    //___ Get the current input value
    const value = e.target.value;
    setInputValue(value);

    //___ If the onFilter prop is provided, call it with the current input value
    if(onFilter) {
      onFilter(value)
      return;
    }

    //___ If the input value is not empty, search for stations
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

  //___ Function to close the search results dropdown
  const handleCloseResults = () => {
    setShowResults(false);
    setInputValue("")
    
  };

  //___ Render the search input component
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

    </form>
  );
}