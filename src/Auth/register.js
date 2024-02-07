import { useState, useContext } from "react";
import RegistrationView from "./registrationView";
import { AuthContext } from "./auth-context";

export default function Register({
    isRegistration,
    HandleCloseRegistration,
    isError,
    HandleClearError
}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const auth = useContext(AuthContext);

    const HandleRegister = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
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
            if(!response.ok){
                throw new Error(responseData.message)
            }
            console.log(responseData);
            setIsLoading(false);
            auth.login();
            HandleCloseRegistration();
        } catch (err){
            console.log(err);
            setIsLoading(false);
            setError(err.message || 'Something went wrong. Please try again.');
        }
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
            isLoading={isLoading}
            error={error}
            isError={isError}
            HandleClearError={HandleClearError}
        />
    )
}