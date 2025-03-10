import Item from "../Item/Item";
import styles from "./styles.module.css";

const Content = ({list}) => {
  return (
    <div className={styles.content}>
      {list?.map((el, index) => (
        <Item key={index} data={el} />
      ))}
    </div>
  );
};

export default Content;
