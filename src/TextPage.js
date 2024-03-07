import React, {useState} from "react";
import Toolbar from "./Toolbar/Toolbar";
import TextEdit from "./TextEditor/TextEdit";
import './App.css';

export default function TextPage(){

    const [editorColors, setEditorColors] = useState(
        JSON.parse(localStorage.getItem('style')) ||
        'black-text-box'
    );
    const [editorContent, setEditorContent] = useState(false);
    const [editorChange, setEditorChange] = useState(0);

    const [title, setTitle] = useState(
        localStorage.getItem('title') ? localStorage.getItem('title') :
        'New File');
    
    const onColorChange = (e) =>{
        console.log(e);
        setEditorColors(e);
        localStorage.setItem('style', JSON.stringify(e));
    }

    return(
        <>
        <div className={editorColors}>
            <div className="toolbar-div">
                <Toolbar 
                    editorColors={editorColors}
                    onColorChange={onColorChange}
                    editorContent={editorContent}
                    setEditorContent={setEditorContent}
                    title={title}
                    setTitle={setTitle}
                    editorChange={editorChange}
                    setEditorChange={setEditorChange}
                />
            </div>
            
            <div className="box-sizer">
                <TextEdit 
                    editorColors={editorColors}
                    editorContent={editorContent}
                    setEditorContent={setEditorContent}
                    title={title}
                    setTitle={setTitle}
                    editorChange={editorChange}
                />
            </div>
        </div>
        </>
    )
}
