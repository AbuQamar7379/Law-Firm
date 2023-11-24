import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.nav_links}>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practise Areas</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.contactNow}>
        <Button text="Contact Now" />
      </div>
    </nav>
  );
}

export default Navbar;
