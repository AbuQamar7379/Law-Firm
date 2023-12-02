// import styles from "../Sections/Why Choose Us/successCard.module.css";
import React from "react";
import gift from "../../assets/gift.svg";
import Button from "../Button/Button";
import "./carouselCard.css";

const SucessCardCarousel = ({ successRate }) => (
  <div className="cardParent">
    <div className="imgWrapper">
      <img src={gift} alt="Success Card" />
    </div>
    <div className="successRate">
      <p>{successRate}% Success Rate </p>
    </div>
    <div className="successContent">
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
    </div>
    <Button text="Read More" className="readMore" />
  </div>
);

export default SucessCardCarousel;
