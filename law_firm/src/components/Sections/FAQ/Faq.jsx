import React from "react";
import styles from "./faq.module.css";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

import { ReactComponent as Plus } from "../../../assets/plus.svg";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";

let accordionQuestions = [
  "Do I need a personal injury report?",
  "How much is my case worth?",
  "What should I do right after car accidect",
  "How much is my case worth?",
];

const Faq = () => {
  return (
    <div className={styles.faqParent}>
      <h1>FAQ</h1>
      <div className={styles.faqWrapper}>
        <p className={styles.content}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className={styles.accordionWrapper}>
          <div>
            {accordionQuestions.map((item, ind) => {
              return (
                <>
                  <Accordion
                    className={styles.accordion}
                    style={{ boxShadow: "none" }}
                  >
                    <AccordionSummary
                      className={styles.accordionSummary}
                      expandIcon={<Plus />}
                      aria-controls={`panel${ind}a-content`}
                      id={`panel${ind}a-header`}
                    >
                      <Typography className={styles.questions}>
                        {item}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={styles.accordionDetails}>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequatduis enim
                        velit mollit Exer. Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequatduis enim velit mollit Exer.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <hr style={{ border: "2px solid #FFFFFF", opacity: "5%" }} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Faq;
