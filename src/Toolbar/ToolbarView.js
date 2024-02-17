import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { AuthContext } from "../Auth/authContext";
import SaveFile from "../FileHandling/saveFile";
import AddNewFile from "../FileHandling/AddNewFile";
import AuthLogic from "../Auth/authLogic";
import LoadPage from "../FileHandling/LoadPage";
import DeleteFile from "../FileHandling/DeleteFile";

export default function ToolbarView({
    colorOptions,
    onColorChange,
    newParams,

    authType,
    HandleCloseAuth,
    HandleOpenLogin,
    HandleOpenRegistration,
    HandleLogout,

    openLoaderPage,
    setOpenLoaderPage,
    editorId,
    setEditorId
}){
    const auth = useContext(AuthContext);

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: newParams.editorColors.label,
            color: state.isSelected ? (newParams.editorColors.label === 'blue' 
                || newParams.editorColors.label === 'black'
                || newParams.editorColors.label === 'green') ? 'white' : 'black' : 'white'
        }),
        option: (base) => {;
            return {
                ...base,
                backgroundColor: newParams.editorColors.label,
                color: (newParams.editorColors.label === 'blue' 
                    || newParams.editorColors.label === 'black'
                    || newParams.editorColors.label === 'green') ? 'white' : 'black'
            }
        }
    };

    return(
        <>
        {authType&& <div className="center-all">
            <AuthLogic 
                authType={authType}
                HandleCloseAuth={HandleCloseAuth}
                apiAddedParams={newParams.apiAddedParams}
            />
        </div>}
        {openLoaderPage&&<div className="center-all">
            <LoadPage 
                openLoaderPage={openLoaderPage}
                setOpenLoaderPage={setOpenLoaderPage}
                newParams={newParams}
                setEditorId={setEditorId}
            />
        </div>}
        {(!authType&&!openLoaderPage)&&
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>

            <Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={(e)=>AddNewFile(e, newParams)}
            >New</Button>

            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={(e)=>SaveFile(e, newParams, editorId, setEditorId)}
            >Save</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={()=>setOpenLoaderPage(true)}
            >Load</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={(e)=>DeleteFile(e, newParams, editorId, setEditorId)}
            >Delete</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={(e)=>HandleLogout(e, newParams)}
            >Logout</Button>}

            {!auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={()=>HandleOpenLogin()}
            >Log In</Button>}

            {!auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors.value}`}
                onClick={()=>HandleOpenRegistration()}
            >Register</Button>}

            <Select
                options={colorOptions}
                value={newParams.editorColors}
                onChange={(e)=>{onColorChange(e)}}
                styles={customSelectStyles}
            />
        </div>}
        </>
    )
}