import React, { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim();

    setName(trimmedName);

    !!trimmedName ? setError("") : setError("Name is required");
  };

  const inputKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && addUser();
  };

  const addUser = () => {
    if (!name) {
      return;
    }

    alert(`Hello ${name}!`);

    addUserCallback(name);

    setName("");
  };

  const totalUsers = users.length;

  return (
    <>
      // With clearing the name input
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        inputKeyPressCallback={inputKeyPressCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
      />
    </>
  );
};

export default GreetingContainer;
