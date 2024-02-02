import LoginView from "./loginView";

export default function Login({
    isLogin,
    HandleCloseLogin
}){
    return(
        <LoginView isLogin={isLogin} HandleCloseLogin={HandleCloseLogin}/>
    );
}