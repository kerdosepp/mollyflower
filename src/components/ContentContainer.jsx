import styles from './ContentContainer.module.css';

import FlowerShop  from './FlowerShop.jsx';

const TYPE_MAP = {
  flowershop: FlowerShop,
};


export default function ContentContainer(props) {
  const Component = TYPE_MAP[props.type];
  return (
    <div className={styles.container}>
      <h3 className={styles.contentName}>{props.contentName}</h3>

       {Component ? <Component /> : null}
        </div>
  )
}