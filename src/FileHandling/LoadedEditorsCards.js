import React from "react";
import { Button } from "react-bootstrap";
import LoadFile from "./loadFile";

export default function LoadedEditorsCards({
    apiAddedParams,
    loadedEditors,
    setEditorContent,
    setTitle,
    editorColors
}){
    let editorCards = loadedEditors.userFiles.map(editor => {
        console.log(editor.id);
        return(
            <Button
                onClick={(e)=>LoadFile(e, setEditorContent, setTitle, apiAddedParams, editor.id, editorColors)}
            >
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