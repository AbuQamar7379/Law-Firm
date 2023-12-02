import React, { useState } from "react";
import styles from "./hero.module.css";
import hero from "../../assets/hero.svg";
import { FaEnvelope } from "react-icons/fa";
import Button from "../Button/Button";
import { useSnackbar } from "notistack";

function Hero() {
  let [email, setEmail] = useState("");
  let { enqueueSnackbar } = useSnackbar();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email) {
      enqueueSnackbar("Request Sended Sucessfully", {
        variant: "success",
        autoHideDuration: 2000,
      });
    }
    setEmail("");
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.headings}>
          <p className={styles.heading1}>You don't have to</p>
          <p className={styles.heading2}>Fight them Alone.</p>
          <p className={styles.heading3}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>

          <form className={styles.emailWrapper} onSubmit={handleClick}>
            <FaEnvelope className={styles.envelope} />
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              className={styles.emailField}
              placeholder="Enter your email address"
              required
            />
            <Button text="Let's Talk" className={styles.letsTalk} />
          </form>
        </div>
        <div className={styles.heroImg}>
          <img src={hero} alt="Hero_Image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
