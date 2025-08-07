import styles from './Search.module.css'
import SearchInput from './SearchInput.jsx'

export default function Search({ onFilter, placeholder, className, keyword}) {
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
    </div>
  )
}
