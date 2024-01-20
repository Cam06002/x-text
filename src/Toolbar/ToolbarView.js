//import { Button } from "react-bootstrap";
import Select from "react-select";

export default function ToolbarView({
    colorOptions,
    editorColors,
    onColorChange
}){

    const customSelectStyles = {
        control: base => ({
            ...base,
            background: editorColors.label
        }),
    };

    return(
        <>
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>
            {/* <Button className={`item-gapper ${editorColors.value}`}>Save</Button>
            <Button className={`item-gapper ${editorColors.value}`}>Load</Button> */}
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