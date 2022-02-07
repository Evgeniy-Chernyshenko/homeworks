import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { PATH } from "./Routes";
import styles from "./Header.module.css";

function Header() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const setIsActive = (props: { isActive: boolean }) =>
    props.isActive ? styles.active : "";

  return (
    <div className={styles.header}>
      <div className={styles.panel}>
        <div>
          <Link to={PATH.PRE_JUNIOR} className={styles.logo}>
            Ignat's homeworks
          </Link>
        </div>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
          className={styles.hamburger}
        >
          {isShow ? "X" : "☰"}
        </button>
      </div>
      <ul
        onClick={() => setIsShow(false)}
        className={`${styles.menu} ${isShow ? styles.show : ""}`}
      >
        <li>
          <NavLink className={setIsActive} to={PATH.PRE_JUNIOR}>
            pre-junior
          </NavLink>
        </li>
        <li>
          <NavLink className={setIsActive} to={PATH.JUNIOR}>
            junior
          </NavLink>
        </li>
        <li>
          <NavLink className={setIsActive} to={PATH.JUNIOR_PLUS}>
            junior+
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
