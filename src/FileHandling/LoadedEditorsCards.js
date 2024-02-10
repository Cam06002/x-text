import React from "react";
import { Button } from "react-bootstrap";
import LoadFile from "./loadFile";

export default function LoadedEditorsCards({
    apiAddedParams,
    loadedEditors,
    setEditorContent,
    setTitle
}){
    let editorCards = loadedEditors.userFiles.map(editor => {
        return(
            <Button>
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