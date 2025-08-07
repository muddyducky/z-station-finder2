import styles from "./Screen3.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import SecondNav from "../../shared/SecondNav";
import ResultModal from "../../features/results/ResultModal2";
import Search from "../../features/search/Search";

export default function Screen3() {
  const location = useLocation();
  const { station } = location.state || { station: {} };
  const [filteredStation, setFilteredStation] = useState(station);
  const [isModalOpen, setIsModalOpen] = useState(true)

  useEffect(() => {
    setFilteredStation(station);
  }, [station]);

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!filteredStation || !filteredStation.id) {
    return <p>No station data available.</p>;
  }

  if (!isModalOpen|| !filteredStation || !filteredStation.id) {
    return null; 
 }

  return (
    <div className={styles.screen3}>
      <Navbar className={styles.nav} />
      <SecondNav className={styles.secondNav} />
      <Search/>
      <ResultModal
        className={styles.resultModal}
        stations={[filteredStation]}
        onClose={closeModal}
      />
    </div>
  );
}
