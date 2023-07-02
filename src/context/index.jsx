import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [openModalSpiderman, setOpenModalSpiderman] = useState(false);
  const [openModalRobin, setOpenModalRobin] = useState(false);
  const [openModalBatman, setOpenModalBatman] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openModalSpiderman,
        setOpenModalSpiderman,
        openModalRobin,
        setOpenModalRobin,
        openModalBatman,
        setOpenModalBatman,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
