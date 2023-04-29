import { useReducer } from 'react';
import { MyContext, UseReducer, initialState } from './UseReducer';

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(UseReducer, initialState);

  return <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>;
};
