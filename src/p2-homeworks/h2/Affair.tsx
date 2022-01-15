import React from "react";
import { AffairType, deleteAffairCallbackType } from "./HW2";
import styles from "./Affair.module.css";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: deleteAffairCallbackType;
};

function Affair(props: AffairPropsType) {
  return (
    <div className={styles.affair}>
      <div>{props.affair.name}</div>
      <div className={`${styles.priority} ${styles[props.affair.priority]}`}>
        [{props.affair.priority}]
      </div>
      <div>
        <button onClick={() => props.deleteAffairCallback(props.affair._id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Affair;
