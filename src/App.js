import React, {useState, useCallback, useEffect} from 'react';
import TextPage from './TextPage';
import { AuthContext } from './Auth/authContext';
import './App.css';

export default function App() {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationTime)=>{
    setToken(token);
    setUserId(uid);
    const tokenExpirationTime = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60 * 4);
    localStorage.setItem('userData', JSON.stringify({
      userId: uid, 
      token: token,
      expiration: tokenExpirationTime.toISOString()
    }));
  },[]);

  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
  },[]);

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser && storedUser.token && new Date(storedUser.expiration) > new Date()){
      login(storedUser.userId, storedUser.token, new Date(storedUser.expiration));
    }
  },[login]);

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
