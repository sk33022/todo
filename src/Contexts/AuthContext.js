import React, {  createContext, useState } from 'react';



export const  AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const changeAuthStatus = () => {
   setIsLoggedIn(!isLoggedIn);
}
  return <div>
     <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus}} >
            {children}
        </AuthContext.Provider>
  </div>;
};
export default AuthContextProvider;