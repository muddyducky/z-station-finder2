import styles from './App.module.css'

// import SecondNav from './components/shared/SecondNav'
// import Navbar from './components/shared/Navbar'
import Search from './components/features/search/Search'
import SearchInput from './components/features/search/SearchInput'
import Screen1 from './components/pages/screen1/Screen1'
import PageRoutes from './config/PageRoutes'

function App() {

  return (
    <div className={styles.app}>
    {/* <Navbar/> */}
    {/* <SecondNav/> */}
    {/* <Search/> */}
    {/* <SearchInput/> */}
    {/* <Screen1/> */}
    <PageRoutes/>
    
    </div>
  )
}

export default App
