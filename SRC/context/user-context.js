// create user context
import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [firstName, setFirstName] = useState('');
  const [globalQuantity, setGlobalQuantity] = useState(0);
  const [globalCartCount, setGlobalCartCount] = useState(0);
  const [currentDrawerRoute, setCurrentDrawerRoute] = useState('');
  const [userData, setUserData] = useState([]);

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        globalQuantity,
        setGlobalQuantity,
        globalCartCount,
        setGlobalCartCount,
        currentDrawerRoute,
        setCurrentDrawerRoute,
        userData,
        setUserData,
        cartData,
        setCartData,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => React.useContext(UserContext);
