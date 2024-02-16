import React, {useState, useCallback, useEffect} from 'react';
import TextPage from './TextPage';
import { AuthContext } from './Auth/authContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let logoutTimer;

export default function App() {
  const [token, setToken] = useState(false);
  const [expiration, setExpiration] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationTime)=>{
    setToken(token);
    setUserId(uid);
    const tokenExpirationTime = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60 * 4);
    setExpiration(tokenExpirationTime);
    localStorage.setItem('userData', JSON.stringify({
      userId: uid, 
      token: token,
      expiration: tokenExpirationTime.toISOString()
    }));
  },[]);

  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
    setExpiration(null);
    localStorage.removeItem('userData');
  },[]);

  useEffect(()=>{
    if (token && expiration){
      const remainingTime = expiration.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  },[token, logout, expiration])

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
