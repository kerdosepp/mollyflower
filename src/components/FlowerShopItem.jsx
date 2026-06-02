import styles from "./FlowerShopItem.module.css";

export default function FlowerShopItem(props) {
  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <h4 className={styles.flowerName}>{props.flowerName}</h4>
        <p className={styles.price}>${props.price}/Bunch</p>
      </div>
      <img className={styles.image} src={props.imageUrl}></img>
    </div>
  );
}
