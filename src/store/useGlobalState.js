import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        gamerName: action.data.gamerName,
        level: action.data.level,
      };
    case 'LOGOUT':
      return {
        isLoggedIn: false,
        gamerName: '',
        level: '',
      };
    case 'SETGAMERNAME':
      return { gamerName: action.data };
    case 'SETLEVEL':
      return { level: action.data };
    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isLoggedIn: true,
    gamerName: 'dipen',
    level: 1,
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
