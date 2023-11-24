import React, { useState } from "react";
import styles from "./hero.module.css";
import hero from "../../assets/hero.svg";
import { FaEnvelope } from "react-icons/fa";
import Button from "../Button/Button";

function Hero() {
  let [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <div style={{ height: "720px", backgroundColor: "#111111" }}>
      <div className={styles.hero}>
        <div className={styles.headings}>
          <p style={{ fontSize: "66px", fontWeight: 500, lineHeight: "90px" }}>
            You don't have to
          </p>
          <p style={{ fontSize: "66px", fontWeight: 700, lineHeight: "90px" }}>
            Fight them Alone.
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "30px",
              color: "gray",
              marginTop: "30px",
            }}
          >
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
