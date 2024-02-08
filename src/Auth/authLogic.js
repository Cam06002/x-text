import { useState, useContext } from "react";
import { AuthContext } from "./authContext";
import AuthView from "./authView";


export default function AuthLogic({
    authType,
    HandleCloseAuth,
}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const auth = useContext(AuthContext);

    const apiParams = authType === 'login' ? {
        url: 'http://localhost:5000/api/auth/login',
        callType: 'POST',
        bodyData: JSON.stringify({email: email,password: password}),
        setIsLoading: setIsLoading,
        setError: setError,
        HandleCloseAuth: HandleCloseAuth,
        auth: auth
    } : authType === 'registration' ? {
        url: 'http://localhost:5000/api/auth/register',
        callType: 'POST',
        bodyData: JSON.stringify({name: name, email: email,password: password}),
        setIsLoading: setIsLoading,
        setError: setError,
        HandleCloseAuth: HandleCloseAuth,
        auth: auth
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
            
            isLoading={isLoading}
            error={error}
        />
        </>
    );
}