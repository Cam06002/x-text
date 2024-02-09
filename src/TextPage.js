import React, {useState} from "react";
import Toolbar from "./Toolbar/Toolbar";
import TextEdit from "./TextEditor/TextEdit";
import './App.css';

export default function TextPage(){

    const [editorColors, setEditorColors] = useState({value: 'black-text-box', label: 'black'});
    const [editorContent, setEditorContent] = useState(false);
    const [title, setTitle] = useState('');
    
    const onColorChange = (e) =>{
        setEditorColors(e);
        console.log(e);
    }

    document.body.style.backgroundColor = editorColors.label;

    return(
        <>
        <div className={editorColors.value}>
            <div className="toolbar-div">
                <Toolbar 
                    editorColors={editorColors}
                    onColorChange={onColorChange}
                    editorContent={editorContent}
                    setEditorContent={setEditorContent}
                    title={title}
                    setTitle={setTitle}
                />
            </div>
            <div className="box-sizer">
                <TextEdit 
                    editorColors={editorColors}
                    editorContent={editorContent}
                    setEditorContent={setEditorContent}
                    title={title}
                    setTitle={setTitle}
                />
            </div>
        </div>
        </>
    )
}
