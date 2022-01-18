import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "low" | "middle" | "high";
export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;
export type deleteAffairCallbackType = (_id: number) => void;

// constants
const defaultAffairs: AffairType[] = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: AffairType[],
  filter: FilterType
): AffairType[] => {
  if (filter === "all") return affairs;

  return affairs.filter(({ priority }) => priority === filter);
};
export const deleteAffair = (
  affairs: AffairType[],
  _id: number
): AffairType[] => {
  return affairs.filter((affair) => affair._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback: deleteAffairCallbackType = (_id) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <hr />
      homeworks 2
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
        filter={filter}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
