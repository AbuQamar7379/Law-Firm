import React, { useState } from "react";
import styles from "./newsletter.module.css";
import { useSnackbar } from "notistack";
import Footer from "../../Footer/Footer";
const Newsletter = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let { enqueueSnackbar } = useSnackbar();

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      enqueueSnackbar("Request for Subscription Sended Successfully", {
        variant: "success",
        autoHideDuration: 2000,
      });

      setFullName("");
      setEmail("");
    }
  };

  return (
    <div className={styles.newsletterWrapper}>
      <div className={styles.newsletter}>
        <h1>Subscribe Our Newsletter</h1>
      </div>
      <form className={styles.details} onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Name : "
          id={styles.fullName}
          required
          value={fullName}
          onChange={handleFullName}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          id={styles.email}
          required
          value={email}
          onChange={handleEmail}
        />
        <button id={styles.send}>SEND</button>
      </form>
    </div>
  );
};

export default Newsletter;
