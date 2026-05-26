import styles from "./Title.module.css";

export default function Title(props) {
  return (
    <div className={styles.titlewrap}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
