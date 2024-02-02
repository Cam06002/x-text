import { useState } from "react";
import ToolbarView from "./ToolbarView";

export default function Toolbar({
    editorColors,
    onColorChange
}){
    const colorOptions = [
        {value: 'blue-text-box', label: 'blue'},
        {value: 'green-text-box', label: 'green'},
        {value: 'black-text-box', label: 'black'},
        {value: 'pink-text-box', label: 'pink'}
    ];

    const [isLogin, setIsLogin] = useState(false);
    const [isRegistration, setIsRegistration] = useState(false);

    const HandleOpenLogin = () => {
        setIsLogin(true);
    };

    const HandleCloseLogin = () => {
        setIsLogin(false);
    };

    const HandleOpenRegistration = () => {
        setIsRegistration(true);
    };

    const HandleCloseRegistration = () => {
        setIsRegistration(false);
    };

    return(
        <>
        <ToolbarView 
            colorOptions={colorOptions}
            editorColors={editorColors}
            onColorChange={onColorChange}

            isLogin={isLogin}
            HandleOpenLogin={HandleOpenLogin}
            HandleCloseLogin={HandleCloseLogin}

            isRegistration={isRegistration}
            HandleOpenRegistration={HandleOpenRegistration}
            HandleCloseRegistration={HandleCloseRegistration}
        />
        </>
    )
}