import { Button } from "react-bootstrap";
import Select from "react-select";

export default function ToolbarView({
    colorOptions,
    editorColors,
    onColorChange
}){
    return(
        <>
        <div className="toolbar-div">
            <h3 className="item-gapper">X-Text</h3>
            <Button className={`item-gapper ${editorColors.value}`}>Save</Button>
            <Button className={`item-gapper ${editorColors.value}`}>Load</Button>
            <Select
                options={colorOptions}
                value={editorColors}
                onChange={(e)=>{onColorChange(e)}}
                className={`item-gapper ${editorColors.value}`}
            />
        </div>
        </>
    )
}