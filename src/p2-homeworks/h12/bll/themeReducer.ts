export type ThemeType = 'default' | 'dark' | 'red' | 'some';

export type ThemeStateType = {
  theme: ThemeType;
};

type ActionCreatorsType<T> = T extends { [key: string]: infer V } ? V : never;
type ActionType = ReturnType<ActionCreatorsType<typeof themeAC>>;

const initState: ThemeStateType = {
  theme: 'default',
};

export const themeReducer = (
  state = initState,
  action: ActionType
): ThemeStateType => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return { ...state, theme: action.theme };
    }

    default:
      return state;
  }
};

export const themeAC = {
  changeTheme: (theme: ThemeType) =>
    ({
      type: 'CHANGE_THEME',
      theme,
    } as const),
};
