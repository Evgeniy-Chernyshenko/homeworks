import React from "react";
import Affair from "./Affair";
import { AffairType, deleteAffairCallbackType, FilterType } from "./HW2";
import styles from "./Affairs.module.css";

type AffairsPropsType = {
  data: AffairType[];
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: deleteAffairCallbackType;
  filter: FilterType;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const getFilterButtonClass = (filter: FilterType) => {
    return props.filter === filter ? styles.activeButton : undefined;
  };

  return (
    <div className={styles.affairs}>
      {mappedAffairs}

      <button
        onClick={() => props.setFilter("all")}
        className={getFilterButtonClass("all")}
      >
        All
      </button>
      <button
        onClick={() => props.setFilter("high")}
        className={getFilterButtonClass("high")}
      >
        High
      </button>
      <button
        onClick={() => props.setFilter("middle")}
        className={getFilterButtonClass("middle")}
      >
        Middle
      </button>
      <button
        onClick={() => props.setFilter("low")}
        className={getFilterButtonClass("low")}
      >
        Low
      </button>
    </div>
  );
}

export default Affairs;
