import styles from './BigImage.module.css';

export default function BigImage(props) {
  return (
    <img src={props.path} className={styles.bigimage}>
    </img>
  )
}