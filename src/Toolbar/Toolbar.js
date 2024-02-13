import { useState, useContext } from "react";
import { AuthContext } from "../Auth/authContext";
import ToolbarView from "./ToolbarView";
import AddNewFile from "../FileHandling/AddNewFile";

export default function Toolbar({
    editorColors,
    onColorChange,
    editorContent,
    setEditorContent,
    title,
    setTitle,
    editorChange,
    setEditorChange
}){
    const colorOptions = [
        {value: 'blue-text-box', label: 'blue'},
        {value: 'green-text-box', label: 'green'},
        {value: 'black-text-box', label: 'black'},
        {value: 'pink-text-box', label: 'pink'}
    ];

    const [authType, setAuthType] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [openLoaderPage, setOpenLoaderPage] = useState(false);

    const auth = useContext(AuthContext);

    const apiAddedParams = {
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        error: error,
        setError: setError,
        auth: auth
    }

    const newParams = {
        editorColors: editorColors,
        editorContent: editorContent,
        setEditorContent: setEditorContent,
        title: title,
        setTitle: setTitle,
        apiAddedParams: apiAddedParams,
        editorChange: editorChange,
        setEditorChange: setEditorChange
    };

    const HandleOpenLogin = () => {
        setAuthType('login');
    };

    const HandleOpenRegistration = () => {
        setAuthType('registration');
    };

    const HandleCloseAuth = () => {
        setAuthType(false);
    }

    const HandleLogout = (e, newParams) => {
        auth.logout();
        AddNewFile(e, newParams);
    }

    return(
        <>
        <ToolbarView 
            colorOptions={colorOptions}
            onColorChange={onColorChange}
            newParams={newParams}

            authType={authType}
            HandleCloseAuth={HandleCloseAuth}
            HandleOpenLogin={HandleOpenLogin}
            HandleOpenRegistration={HandleOpenRegistration}
            HandleLogout={HandleLogout}


            openLoaderPage={openLoaderPage}
            setOpenLoaderPage={setOpenLoaderPage}
        />
        </>
    )
}