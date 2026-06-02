import styles from "./Services2.module.css";

import service1Img from "../assets/images/Service2-1.png";
import service2Img from "../assets/images/Service2.jpg";
import service3Img from "../assets/images/Service3.png";

export default function Services2() {
  return (
    <div className={styles.servicesWrapper}>
        <ul className={styles.uList}>
            <li className={styles.itemWrapper}>
                <div className= {styles.textInfo}>
                    <h1 className={styles.serviceName} >FLORAL INSTALLATIONS</h1>
                    <p className={styles.serviceDescription}>We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                </div>
                <img className={styles.img}src={service1Img}></img>
            </li>
                        <li className={styles.itemWrapper}>
                <div className= {styles.textInfo}>
                    <h1 className={styles.serviceName} >NATIVE PLANT ARRANGEMENTS</h1>
                    <p className={styles.serviceDescription}>Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
                </div>
                <img className={styles.img}src={service2Img}></img>
            </li>
                                    <li className={styles.itemWrapper}>
                <div className= {styles.textInfo}>
                    <h1 className={styles.serviceName} >CUSTOM FLORAL CONCEPTS</h1>
                    <p className={styles.serviceDescription}>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
                </div>
                <img className={styles.img}src={service3Img}></img>
            </li>
        </ul>
    </div>
  );
}
