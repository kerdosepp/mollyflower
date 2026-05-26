import styles from "./Services.module.css";
import Title from "../components/Title.jsx";

import service1Img from "../assets/images/Service1.png";
import service2Img from "../assets/images/Service2.jpg";
import service3Img from "../assets/images/Service3.png";

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.point}>
        <h1 className={styles.number}>1</h1>
        <img className={styles.img} src={service1Img}></img>
        <Title
          title={
            <>
              FLORAL INSTALL
              <wbr />
              ATIONS
            </>
          }
          description="Living art for homes, businesses, and events."
        />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.point}>
        <h1 className={styles.number}>2</h1>
        <img className={styles.img} src={service2Img}></img>
        <Title
          title={
            <>
              NATIVE PLANT ARRANGE
              <wbr />
              MENTS
            </>
          }
          description="Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
        />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.point}>
        <h1 className={styles.number}>3</h1>
        <img className={styles.img} src={service3Img}></img>
        <Title
          title={<>CUSTOM FLORAL CONCEPTS</>}
          description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
        />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}
