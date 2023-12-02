import React from "react";
import styles from "./areaImage.module.css";
import { Box, Grid } from "@mui/material";
import businessLaw1 from "../../../assets/Area of Practices/businessLaw1.svg";
import partnershipLaw from "../../../assets/Area of Practices/partnershipLaw.svg";
import realEstateLaw from "../../../assets/Area of Practices/realEstateLaw.svg";
import businessLaw2 from "../../../assets/Area of Practices/businessLaw2.svg";
import landloardDisputes from "../../../assets/Area of Practices/landloardDisputes.svg";
import elderAbuse from "../../../assets/Area of Practices/elderAbuse.svg";

let area = [
  {
    name: ["BUSINESS LAW", "PARTNERSHIP LAW"],
    img: [businessLaw1, partnershipLaw],
  },
  {
    name: ["REAL ESTATE LAW", "BUSINESS LAW"],
    img: [realEstateLaw, businessLaw2],
  },
  {
    name: ["LANDLORD DISPUTES", "ELDER ABUSE"],
    img: [landloardDisputes, elderAbuse],
  },
];

const AreaImage = () => {
  return (
    <div className={styles.areaParent}>
      <p className={styles.area}>Area of Practices</p>
      <div className={styles.parentGrid}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            {area.map((ele, ind) => {
              return (
                <>
                  <Grid
                    item
                    xs={ind % 2 === 0 ? 8 : 4}
                    md={ind % 2 === 0 ? 8 : 4}
                    className={styles.imgGrid}
                  >
                    <img src={ele["img"][0]} alt={ele} />
                    <p className={styles.imgName}>{ele["name"][0]}</p>
                  </Grid>
                  <Grid
                    item
                    xs={ind % 2 === 0 ? 4 : 8}
                    md={ind % 2 === 0 ? 4 : 8}
                    className={styles.imgGrid}
                  >
                    <img src={ele["img"][1]} alt={ele} />
                    <p className={styles.imgName}>{ele["name"][1]}</p>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default AreaImage;
