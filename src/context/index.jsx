import { createContext } from 'react';

const context = createContext();

const ContextProvider = ({ children }) => {
  return <context.Provider>{children}</context.Provider>;
};

export { context, ContextProvider };
