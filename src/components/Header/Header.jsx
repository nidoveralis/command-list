import Logo from "../../assets/img/logo.png";
import ErrorIcon from "../../assets/icon/error.svg";
import RefreshIcon from "../../assets/icon/refresh.svg";
import styles from "./styles.module.css";

const Header = ({ isLoading, error, handleClickRefresh }) => {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Логотип" className={styles.logo} />
      <div className={styles.container}>
        {error && (
          <div className={styles.error}>
            <img src={ErrorIcon} alt="Ошибка" />
            <span>Ошибка: не удалось загрузить информацию</span>
          </div>
        )}
        <button className={styles.button} onClick={handleClickRefresh}>
          <span className={styles.button__text}>Обновить</span>
          <img
            src={RefreshIcon}
            alt="Загрузка"
            className={`${styles.button__icon} ${
              isLoading ? styles.button__icon_active : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
