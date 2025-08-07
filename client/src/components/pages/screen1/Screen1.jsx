import styles from './Screen1.module.css'
import Search from '../../features/search/Search'
import Navbar from '../../shared/Navbar.jsx'
import SecondNav from '../../shared/SecondNav.jsx'

export default function Screen1() {
  return (
    <div className={styles.screen1Page}>
      <Navbar/>
      <SecondNav/>
      <Search/>
    </div>
  )
}
