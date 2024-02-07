import { useState, useContext } from "react";
import LoginView from "./loginView";
import { AuthContext } from "./auth-context";

export default function Login({
    isLogin,
    HandleCloseLogin,
    isError,
    HandleClearError
}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const auth = useContext(AuthContext);

    const HandleLogin = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const responseData = await response.json();
            if(!response.ok){
                throw new Error(responseData.message)
            }
            console.log(responseData);
            setIsLoading(false);
            auth.login();
            HandleCloseLogin();
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            setError(err.message || 'Something went wrong. Please try again.');
        }
        
    };

    return(
        <LoginView 
            isLogin={isLogin} 
            HandleCloseLogin={HandleCloseLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            HandleLogin={HandleLogin}
            isLoading={isLoading}
            error={error}
            isError={isError}
            HandleClearError={HandleClearError}
        />
    );
}