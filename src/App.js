import React, {useState, useCallback} from 'react';
import TextPage from './TextPage';
import { AuthContext } from './Auth/authContext';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid)=>{
    setIsLoggedIn(true)
    setUserId(uid)
  },[]);

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
    setUserId(null);
  },[]);

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, userId: userId,  login: login, logout: logout}}>
      <TextPage />
    </AuthContext.Provider>
    </>
  );
}
