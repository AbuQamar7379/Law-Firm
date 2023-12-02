import React from "react";
import styles from "./ourTeam.module.css";
import { Card, CardHeader, Avatar, Grid, Typography } from "@mui/material";
import danial from "../../../assets/Our Team/danial.svg";
import sanfole from "../../../assets/Our Team/sanfole.svg";
import cesforila from "../../../assets/Our Team/cesforila.svg";
import colleen from "../../../assets/Our Team/colleen.svg";
import haldone from "../../../assets/Our Team/haldone.svg";
import nik from "../../../assets/Our Team/nik.svg";

let teamData = [
  {
    name: "Danial Def",
    cases: 301,
    src: danial,
  },
  {
    name: "Sanfole",
    cases: 850,
    src: sanfole,
  },
  {
    name: "Cesforila",
    cases: 470,
    src: cesforila,
  },
  {
    name: "Colleen",
    cases: 180,
    src: colleen,
  },
  {
    name: "Haldone",
    cases: 212,
    src: haldone,
  },
  {
    name: "Nik Jeo",
    cases: 350,
    src: nik,
  },
];

const OurTeam = () => {
  return (
    <div className={styles.ourTeamWrapper}>
      <h1>Our Team</h1>
      <div>
        <Grid
          container
          spacing={{
            xs: 1,
            md: 3,
          }}
        >
          {teamData.map((data) => {
            return (
              <Grid item xs={6} key={data.name}>
                <Card className={styles.cardParent}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={styles.avatar}>
                        <img src={data.src} alt={data.name} />
                      </Avatar>
                    }
                    title={
                      <Typography variant="title" className={styles.name}>
                        {data.name}
                      </Typography>
                    }
                    subheader={
                      <Typography variant="subtitle2" className={styles.case}>
                        {data.cases} Cases
                      </Typography>
                    }
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default OurTeam;
