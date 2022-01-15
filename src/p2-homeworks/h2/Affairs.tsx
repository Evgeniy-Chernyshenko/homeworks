import React from "react";
import Affair from "./Affair";
import { AffairType, deleteAffairCallbackType, FilterType } from "./HW2";
import styles from "./Affairs.module.css";

type AffairsPropsType = {
  data: AffairType[];
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: deleteAffairCallbackType;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  return (
    <div className={styles.affairs}>
      {mappedAffairs}

      <button onClick={() => props.setFilter("all")}>All</button>
      <button onClick={() => props.setFilter("high")}>High</button>
      <button onClick={() => props.setFilter("middle")}>Middle</button>
      <button onClick={() => props.setFilter("low")}>Low</button>
    </div>
  );
}

export default Affairs;
