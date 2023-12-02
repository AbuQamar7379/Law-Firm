/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import insta from "../../assets/Footer/insta.svg";
import facebook from "../../assets/Footer/facebook.svg";
import twitter from "../../assets/Footer/twitter.svg";
import pinterest from "../../assets/Footer/pinterest.svg";

function Navbar({ component }) {
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
      {component !== "footer" ? (
        <div className={styles.contactNow}>
          <Button text="Contact Now" />
        </div>
      ) : (
        <div className={styles.networks}>
          <a href="https://www.instagram.com/" target="blank">
            <img src={insta} alt="Instagram" />
          </a>

          <a href="https://www.facebook.com/" target="blank">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com/" target="blank">
            <img src={pinterest} alt="Pinterest" />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
