/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useContext } from 'react';
import { ContextInterface } from '../utils/interface/Context';
import reducer from './reducers';

export const Context = createContext<ContextInterface>({
  theme: 'light',
  dispatch: () => {},
});

export const Provider = ({ children, initialState = {} }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
