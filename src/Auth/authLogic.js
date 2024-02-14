import { useState, useContext } from "react";
import { AuthContext } from "./authContext";
import AuthView from "./authView";


export default function AuthLogic({
    authType,
    HandleCloseAuth,
    apiAddedParams
}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);

    const apiParams = authType === 'login' ? {
        url: 'http://localhost:5000/api/auth/login',
        callType: 'POST',
        bodyData: JSON.stringify({email: email,password: password}),
        setIsLoading: apiAddedParams.setIsLoading,
        setError: apiAddedParams.setError,
        HandleCloseAuth: HandleCloseAuth,
        auth: auth,
        headers: {'Content-Type': 'application/json'}
    } : authType === 'registration' ? {
        url: 'http://localhost:5000/api/auth/register',
        callType: 'POST',
        bodyData: JSON.stringify({name: name, email: email,password: password}),
        setIsLoading: apiAddedParams.setIsLoading,
        setError: apiAddedParams.setError,
        HandleCloseAuth: HandleCloseAuth,
        auth: auth,
        headers: {'Content-Type': 'application/json'}
    } : null;

    return(
        <>
        <AuthView 
            authType={authType} 
            HandleCloseAuth={HandleCloseAuth}
            apiParams={apiParams}

            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            
            isLoading={apiAddedParams.isLoading}
            error={apiAddedParams.error}
        />
        </>
    );
}