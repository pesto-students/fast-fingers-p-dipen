import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...{
          isLoggedIn: true,
          gamerName: action.data.gamerName,
          level: action.data.level,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        ...{
          isLoggedIn: false,
          gamerName: '',
          level: null,
        },
      };
    case 'SETGAMERNAME':
      return { ...state, ...{ gamerName: action.data } };
    case 'SETLEVEL':
      return { ...state, ...{ level: action.data } };
    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isLoggedIn: false,
    gamerName: '',
    level: null,
    gameTimer: null,
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
