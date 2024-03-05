import React from "react";
import { Button } from "react-bootstrap";
import LoadFile from "./loadFile";

export default function LoadedEditorsCards({
    newParams,
    loadedEditors,
    HandleCloseLoader,
    setEditorId
}){
    if(loadedEditors.userFiles){
        let editorCards = loadedEditors.userFiles.map(editor => {
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
    } else {
        return <h3>No Saved Editors Found</h3>
    }
}