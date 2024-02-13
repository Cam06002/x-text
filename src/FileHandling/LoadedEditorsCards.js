import React from "react";
import { Button } from "react-bootstrap";
import LoadFile from "./loadFile";

export default function LoadedEditorsCards({
    newParams,
    loadedEditors,
    HandleCloseLoader,
    setEditorId
}){
    let editorCards = loadedEditors.userFiles.map(editor => {
        console.log(editor.id);
        return(
            <Button
                onClick={(e)=> {
                    LoadFile(e, newParams, editor.id, setEditorId); 
                    HandleCloseLoader();
                }}>
                <div className="editor-card center-all">
                    {editor.title}
                </div>
            </Button>
        )
    })
    return(
        <div className="editor-card">
            {editorCards}
        </div>
    )
}