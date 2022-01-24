import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
  inputKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, inputKeyPressCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : undefined;

  return (
    <div className={s.greeting}>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={inputKeyPressCallback}
        className={inputClass}
        onBlur={setNameCallback}
      />
      <button onClick={addUser} disabled={!name}>
        add
      </button>{' '}
      <span>{totalUsers}</span>
      <div className={s.errorText}>{error}</div>
    </div>
  );
};

export default Greeting;
