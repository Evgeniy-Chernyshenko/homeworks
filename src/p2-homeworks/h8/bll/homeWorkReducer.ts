import { PeopleType } from '../HW8';

type actionType =
  | {
      type: 'sort';
      payload: 'up' | 'down';
    }
  | {
      type: 'check';
      payload: number;
    };

export const homeWorkReducer = (
  state: PeopleType,
  action: actionType
): PeopleType => {
  switch (action.type) {
    case 'sort': {
      return [...state].sort((u1, u2) =>
        action.payload === 'up'
          ? u1.name.localeCompare(u2.name)
          : action.payload === 'down'
          ? u2.name.localeCompare(u1.name)
          : 0
      );
    }
    case 'check': {
      return state.filter((u) => u.age >= action.payload);
    }
    default:
      return state;
  }
};
