import styles from "./successCard.module.css";
import gift from "../../../assets/gift.svg";
import Button from "../../Button/Button";
function SucessCard({ successRate }) {
  return (
    <div className={styles.sucessWrapper}>
      <p className={styles.sucessHeading}>Why Choose Us?</p>
      <div className={styles.cardParent}>
        {successRate.map((card, ind) => {
          return (
            <div
              key={card + ind}
              className={
                (ind + 1) % 2 === 0
                  ? styles.sucessCardEven
                  : styles.sucessCardOdd
              }
            >
              <div className={styles.imgWrapper}>
                <img src={gift} alt="Success Card" />
              </div>
              <div className={styles.sucessRate}>
                <p>{card}% Success Rate </p>
              </div>
              <div className={styles.sucessContent}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </div>
              <Button text="Read More" className={styles.readMore} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SucessCard;
