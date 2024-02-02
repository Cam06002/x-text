import { useState } from "react";
import RegistrationView from "./registrationView";

export default function Register({
    isRegistration,
    HandleCloseRegistration
}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
        />
    )
}