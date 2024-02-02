import RegistrationView from "./registrationView";

export default function Register({
    isRegistration,
    HandleCloseRegistration
}) {
    return(
        <RegistrationView isRegistration={isRegistration} HandleCloseRegistration={HandleCloseRegistration} />
    )
}