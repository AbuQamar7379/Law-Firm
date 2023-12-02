import styles from "./happyClients.module.css";
import janeCooper from "../../../assets/Happy Clients/janeCooper.svg";
import devonLane from "../../../assets/Happy Clients/devonLane.svg";
import robertFox from "../../../assets/Happy Clients/robertFox.svg";
import nikJeo from "../../../assets/Happy Clients/nikJeo.svg";
import colleen from "../../../assets/Happy Clients/colleen.svg";
import Carousel from "./Carousel";
import Card from "./Card";
let data = [
  {
    name: "Jane Cooper",
    img: janeCooper,
  },
  {
    name: "Devon Lane",
    img: devonLane,
  },
  {
    name: "Robert Fox",
    img: robertFox,
  },
  {
    name: "Nik Jeo",
    img: nikJeo,
  },
  {
    name: "Colleen",
    img: colleen,
  },
];

const HappyClients = () => {
  return (
    <div className={styles.parentClients}>
      <div className={styles.clientsWrapper}>
        <h1>What says our happy Clients</h1>
        <Carousel
          data={data}
          component={(item, ind) => <Card data={item} index={ind} />}
        />
      </div>
    </div>
  );
};

export default HappyClients;
