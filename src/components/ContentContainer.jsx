import styles from "./ContentContainer.module.css";

import FlowerShop from "./FlowerShop.jsx";
import Services2 from "./Services2.jsx";

const TYPE_MAP = {
  flowershop: FlowerShop,
  services2: Services2,
};

export default function ContentContainer(props) {
  const Component = TYPE_MAP[props.type];
  return (
<div className={styles.container} style={{ paddingTop: props.paddingTop }}>
      <h3 className={styles.contentName}>{props.contentName}</h3>

      {Component ? <Component /> : null}
    </div>
  );
}
