import { useState, useContext } from "react";
import LoginView from "./loginView";
import { AuthContext } from "./auth-context";

export default function Login({
    isLogin,
    HandleCloseLogin
}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);

    const HandleLogin = async (event) => {
        event.preventDefault();
        try {
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
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
        auth.login();
        HandleCloseLogin();
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
        />
    );
}