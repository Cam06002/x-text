import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { AuthContext } from "../Auth/authContext";
import SaveFile from "../FileHandling/saveFile";
import AuthLogic from "../Auth/authLogic";

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
    setTitle
}){
    const auth = useContext(AuthContext);

    const customSelectStyles = {
        control: base => ({
            ...base,
            background: editorColors.label
        }),
    };

    return(
        <>
        {authType&& <div className="center-all">
            <AuthLogic 
                authType={authType}
                HandleCloseAuth={HandleCloseAuth}
            />
        </div>}
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>

            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={(e)=>SaveFile(e, editorContent, title)}
            >Save</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${editorColors.value}`}
                
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