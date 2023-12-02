import React from "react";
import styles from "./happyClients.module.css";

const SucessCardCarousel = ({ data, index }) => {
  return (
    <div
      className={styles.cardParent}
      style={{ backgroundColor: (index + 1) % 2 === 0 && "#2e2e2e" }}
    >
      <div className={styles.imgWrapper}>
        <img src={data.img} alt={data.name} />
      </div>
      <div className={styles.name}>
        <p>{data.name} </p>
        <p className={styles.ceo}>Ceo of Hunt</p>
      </div>
      <div className={styles.content}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
          dolor do amet sint. Velit officia
        </p>
      </div>
    </div>
  );
};
export default SucessCardCarousel;
