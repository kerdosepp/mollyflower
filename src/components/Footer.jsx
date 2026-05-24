import styles from './Footer.module.css';
import background from '../assets/images/FooterBackround.jpg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerbackround} src={background}/>
            
      <div className={styles.gradient}/>

      <div className={styles.innercontent}>
        <h2 className={styles.logo}>OB.</h2>
        <div className={styles.content}>
          <p className={styles.paragraph2}>Miami, FL</p>
            <p className={styles.paragraph2}>Contact</p>
        </div>
      </div>

    </footer>
  )
}