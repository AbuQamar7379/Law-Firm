import styles from "./intro.module.css";

function Intro() {
  return (
    <div className={styles.introWrapper}>
      <p className={styles.intro}>Let's Introduce Ourself</p>
      <hr />
      <div className={styles.mySelfWrapper}>
        <p className={styles.post}>Criminal Lawyer</p>
        <p className={styles.mySelf}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Intro;
