import styles from "./FlowerShopItem.module.css";

import specialOfferImage from "../assets/images/SpecialOffer.jpg";

export default function FlowerShopItem(props) {
  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <h4 className={styles.flowerName}>DAWN BLOOM</h4>
        <p className={styles.price}>$55/Bunch</p>
      </div>
      <img className={styles.image} src={specialOfferImage}></img>
    </div>
  );
}
