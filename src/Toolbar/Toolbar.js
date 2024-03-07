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
    setEditorChange,
    successfulSave,
    setSuccessfulSave
}){

    const [authType, setAuthType] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [openLoaderPage, setOpenLoaderPage] = useState(false);
    const [editorId, setEditorId] = useState();

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
        setEditorChange: setEditorChange,
        successfulSave: successfulSave,
        setSuccessfulSave: setSuccessfulSave
    };

    const HandleOpenLogin = () => {
        setAuthType('login');
    };

    const HandleOpenRegistration = () => {
        setAuthType('registration');
    };

    const HandleCloseAuth = () => {
        setAuthType(false);
        setError();
    }

    const HandleLogout = (e, newParams, setEditorId) => {
        auth.logout();
        AddNewFile(e, newParams, setEditorId);
        setError();
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
            editorId={editorId}
            setEditorId={setEditorId}
        />
        </>
    )
}