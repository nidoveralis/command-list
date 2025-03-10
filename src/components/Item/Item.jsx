import Icon from "../../assets/icon/icon.svg";

import styles from "./styles.module.css";

const Item = ({ data }) => {
  const statusClass = `${styles[`elem__status_${data.status}`]}`;
  const status =
    data.status === "Ongoing"
      ? "Live"
      : data.status === "Scheduled"
      ? "Match preparing"
      : data.status;

  return (
    <div className={styles.elem}>
      <div className={styles.elem__container}>
        <img src={Icon} alt="Иконка" />
        <span>{data.awayTeam.name}</span>
      </div>
      <div className={styles.elem__statusContainer}>
        <span>{`${data.awayTeam.total_kills} : ${data.homeTeam.total_kills}`}</span>
        <div className={`${styles.elem__status} ${statusClass}`}>
          <span>{status}</span>
        </div>
      </div>
      <div className={styles.elem__container}>
        <span>{data.homeTeam.name}</span>
        <img src={Icon} alt="Иконка" />
      </div>
    </div>
  );
};

export default Item;
