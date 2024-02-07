import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import Login from "../Auth/login";
import Register from "../Auth/register";
import { AuthContext } from "../Auth/auth-context";

export default function ToolbarView({
    colorOptions,
    editorColors,
    onColorChange,

    isLogin,
    HandleOpenLogin,
    HandleCloseLogin,

    isRegistration,
    HandleOpenRegistration,
    HandleCloseRegistration,

    isError,
    setIsError
}){
    const auth = useContext(AuthContext);

    const customSelectStyles = {
        control: base => ({
            ...base,
            background: editorColors.label
        }),
    };

    const HandleClearError = ()=>{
        setIsError(false);
    };

    return(
        <>
        {(isLogin || isRegistration) && <div className="center-all">
            {isLogin&&<Login 
                isLogin={isLogin} 
                HandleCloseLogin={HandleCloseLogin}
                isError={isError}
                HandleClearError={HandleClearError}
            />}
            {isRegistration&&<Register 
                isRegistration={isRegistration} 
                HandleCloseRegistration={HandleCloseRegistration} 
                isError={isError}
                HandleClearError={HandleClearError}
            />}    
        </div>}
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>

            {auth.isLoggedIn&&<Button className={`item-gapper ${editorColors.value}`}>Save</Button>}
            {auth.isLoggedIn&&<Button className={`item-gapper ${editorColors.value}`}>Load</Button>}

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