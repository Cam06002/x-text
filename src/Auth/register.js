import { useState, useContext } from "react";
import RegistrationView from "./registrationView";
import { AuthContext } from "./auth-context";

export default function Register({
    isRegistration,
    HandleCloseRegistration
}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);

    const HandleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (err){
            console.log(err);
        }
        auth.login();
        HandleCloseRegistration();
    };

    return(
        <RegistrationView 
            isRegistration={isRegistration} 
            HandleCloseRegistration={HandleCloseRegistration}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            HandleRegister={HandleRegister}
        />
    )
}