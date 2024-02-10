import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { AuthContext } from "../Auth/authContext";
import SaveFile from "../FileHandling/saveFile";
import AddNewFile from "../FileHandling/AddNewFile";
import AuthLogic from "../Auth/authLogic";
import LoadPage from "../FileHandling/LoadPage";

export default function ToolbarView({
    colorOptions,
    editorColors,
    onColorChange,

    authType,
    HandleCloseAuth,
    HandleOpenLogin,
    HandleOpenRegistration,

    editorContent,
    setEditorContent,
    title,
    setTitle,

    apiAddedParams,
    openLoaderPage,
    setOpenLoaderPage
}){
    const auth = useContext(AuthContext);

    const customSelectStyles = {
        control: base => ({
            ...base,
            background: editorColors.label
        }),
    };

    const newParams = {
        editorColors: editorColors,
        editorContent: editorContent,
        setEditorContent: setEditorContent,
        title: title,
        setTitle: setTitle,
        apiAddedParams: apiAddedParams,
    };

    return(
        <>
        {authType&& <div className="center-all">
            <AuthLogic 
                authType={authType}
                HandleCloseAuth={HandleCloseAuth}
                apiAddedParams={apiAddedParams}
            />
        </div>}
        {openLoaderPage&&<div className="center-all">
            <LoadPage 
                openLoaderPage={openLoaderPage}
                setOpenLoaderPage={setOpenLoaderPage}
                apiAddedParams={apiAddedParams}
                setEditorContent={setEditorContent}
                setTitle={setTitle}
            />
        </div>}
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>

            <Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={(e)=>AddNewFile(e, newParams)}
            >New</Button>

            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={(e)=>SaveFile(e, editorContent, title, apiAddedParams)}
            >Save</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={()=>setOpenLoaderPage(true)}
            >Load</Button>}

            {!auth.isLoggedIn&&<Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={()=>HandleOpenLogin()}
            >Log In</Button>}

            {!auth.isLoggedIn&&<Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={()=>HandleOpenRegistration()}
            >Register</Button>}

            <Select
                options={colorOptions}
                value={editorColors}
                onChange={(e)=>{onColorChange(e)}}
                styles={customSelectStyles}
            />
        </div>
        </>
    )
}