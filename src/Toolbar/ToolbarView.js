import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../Auth/authContext";
import SaveFile from "../FileHandling/saveFile";
import AddNewFile from "../FileHandling/AddNewFile";
import AuthLogic from "../Auth/authLogic";
import LoadPage from "../FileHandling/LoadPage";
import DeleteFile from "../FileHandling/DeleteFile";

export default function ToolbarView({
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

    return(
        <>
        <dialog open={newParams.successfulSave} className={`vertical-margins ${newParams.editorColors}`}>
            <p>Saved Successfully!</p>
            <button onClick={()=>newParams.setSuccessfulSave(false)}>Okay</button>
        </dialog>
        {authType&& <div className="center-all vertical-margins">
            <AuthLogic 
                authType={authType}
                HandleCloseAuth={HandleCloseAuth}
                apiAddedParams={newParams.apiAddedParams}
            />
        </div>}
        {openLoaderPage&&<div className="center-all vertical-margins">
            <LoadPage 
                openLoaderPage={openLoaderPage}
                setOpenLoaderPage={setOpenLoaderPage}
                newParams={newParams}
                setEditorId={setEditorId}
            />
        </div>}
        {(!authType&&!openLoaderPage)&&
        <div className="toolbar-div vertical-margins">
            <Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={(e)=>AddNewFile(e, newParams, setEditorId)}
            >New</Button>

            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={(e)=>SaveFile(e, newParams, editorId, setEditorId)}
            >Save</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={()=>setOpenLoaderPage(true)}
            >Load</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={(e)=>DeleteFile(e, newParams, editorId, setEditorId)}
            >Delete</Button>}
            {auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={(e)=>HandleLogout(e, newParams, setEditorId)}
            >Logout</Button>}

            {!auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={()=>HandleOpenLogin()}
            >Log In</Button>}

            {!auth.isLoggedIn&&<Button 
                className={`item-gapper ${newParams.editorColors}`}
                onClick={()=>HandleOpenRegistration()}
            >Register</Button>}

            <select className={newParams.editorColors} value={newParams.editorColors} onChange={(e)=>onColorChange(e.target.value)}>
                <option value="blue-text-box">blue</option>
                <option value="green-text-box">green</option>
                <option value="black-text-box">black</option>
                <option value="pink-text-box">pink</option>
            </select>
        </div>}
        </>
    )
}