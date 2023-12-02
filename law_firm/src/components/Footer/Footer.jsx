import React from "react";
import styles from "./footer.module.css";
import Navbar from "../Navbar/Navbar";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Navbar component="footer" />
      <div className={styles.terms}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
