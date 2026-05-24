import styles from './AboutUs.module.css';
import Button from './Button.jsx'


export default function AboutUs(props) {
  return (
      <div className={styles.aboutUs}>
        <h3 className="caption">{props.headText}</h3>
        <h2>{props.slogan}</h2>
        <Button text = "ABOUT US"/>
      </div>
  )
}