import React, {useState, useCallback} from 'react';
import TextPage from './TextPage';
import { AuthContext } from './Auth/authContext';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  },[]);

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  },[]);

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <TextPage />
    </AuthContext.Provider>
    </>
  );
}
