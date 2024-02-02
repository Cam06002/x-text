import { Button } from "react-bootstrap";
import Select from "react-select";
import Login from "../Auth/login";
import Register from "../Auth/register";

export default function ToolbarView({
    colorOptions,
    editorColors,
    onColorChange,

    isLogin,
    HandleOpenLogin,
    HandleCloseLogin,

    isRegistration,
    HandleOpenRegistration,
    HandleCloseRegistration
}){

    const customSelectStyles = {
        control: base => ({
            ...base,
            background: editorColors.label
        }),
    };

    return(
        <>
        {(isLogin || isRegistration) && <div className="center-all">
            {isLogin&&<Login isLogin={isLogin} HandleCloseLogin={HandleCloseLogin} />}
            {isRegistration&&<Register isRegistration={isRegistration} HandleCloseRegistration={HandleCloseRegistration} />}    
        </div>}
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>

            {/* <Button className={`item-gapper ${editorColors.value}`}>Save</Button>
            <Button className={`item-gapper ${editorColors.value}`}>Load</Button> */}

            <Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={()=>HandleOpenLogin()}
            >Log In</Button>

            <Button 
                className={`item-gapper ${editorColors.value}`}
                onClick={()=>HandleOpenRegistration()}
            >Register</Button>

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