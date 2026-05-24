import styles from './SiteTitle.module.css';


export default function SiteTitle(props) {
  return (
      <h1 className={styles.title}>{props.title}</h1>
  )
}