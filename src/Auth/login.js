import { useState } from "react";
import LoginView from "./loginView";

export default function Login({
    isLogin,
    HandleCloseLogin
}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <LoginView 
            isLogin={isLogin} 
            HandleCloseLogin={HandleCloseLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
        />
    );
}