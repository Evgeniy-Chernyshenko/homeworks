type StateType = {
  isLoading: boolean;
};

type ActionType = ReturnType<typeof loadingAC>;

const initState: StateType = {
  isLoading: false,
};

export const loadingReducer = (
  state = initState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean) =>
  ({
    type: 'SET_LOADING',
    isLoading,
  } as const);
