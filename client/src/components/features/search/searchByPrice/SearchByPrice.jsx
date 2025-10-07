import styles from "./SearchByPrice.module.css";
export default function SearchByPrice({ togglePrice, setTogglePrice, onShowPriceClick }) {
  //___ Function to handle the show/hide price button click
  
  const handleShowPriceClick = () => {
    setTogglePrice(true);
    onShowPriceClick();
  };

  return (
    <div className={styles.searchByPrice}>
      <img
        src="/icons/buttons/ShowPrice.png"
        alt="showPriceButton"
        onClick={() => {
          setTogglePrice(true)
          handleShowPriceClick()
        }}
        className={`${styles.priceImg} ${togglePrice ? styles.hide : styles.show}`}
      />
      <img
        src="/icons/buttons/HidePrice.png"
        alt="hidePriceButton"
        onClick={() => {
          setTogglePrice(false)
          onShowPriceClick()
        }}
        className={`${styles.priceImg} ${togglePrice ? styles.show : styles.hide}`}
      />
    </div>
  );
}
