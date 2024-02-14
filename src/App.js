import React, {useState, useCallback} from 'react';
import TextPage from './TextPage';
import { AuthContext } from './Auth/authContext';
import './App.css';

export default function App() {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token)=>{
    setToken(token)
    setUserId(uid)
  },[]);

  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
  },[]);

  return (
    <>
    <AuthContext.Provider value={{
      isLoggedIn: !!token, 
      token: token, 
      userId: userId,  
      login: login, 
      logout: logout
    }}>
      <TextPage />
    </AuthContext.Provider>
    </>
  );
}
