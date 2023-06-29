import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [openModalSpiderman, setOpenModalSpiderman] = useState(false);

  return (
    <AppContext.Provider value={{ openModalSpiderman, setOpenModalSpiderman }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
