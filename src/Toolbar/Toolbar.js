import { useState } from "react";
import ToolbarView from "./ToolbarView";

export default function Toolbar({
    editorColors,
    onColorChange,
    editorContent,
    setEditorContent,
    title,
    setTitle
}){
    const colorOptions = [
        {value: 'blue-text-box', label: 'blue'},
        {value: 'green-text-box', label: 'green'},
        {value: 'black-text-box', label: 'black'},
        {value: 'pink-text-box', label: 'pink'}
    ];

    const [authType, setAuthType] = useState(false);

    const HandleOpenLogin = () => {
        setAuthType('login');
    };

    const HandleOpenRegistration = () => {
        setAuthType('registration');
    };

    const HandleCloseAuth = () => {
        setAuthType(false);
    }

    return(
        <>
        <ToolbarView 
            colorOptions={colorOptions}
            editorColors={editorColors}
            onColorChange={onColorChange}

            authType={authType}
            HandleCloseAuth={HandleCloseAuth}
            HandleOpenLogin={HandleOpenLogin}
            HandleOpenRegistration={HandleOpenRegistration}

            editorContent={editorContent}
            setEditorContent={setEditorContent}
            title={title}
            setTitle={setTitle}
        />
        </>
    )
}