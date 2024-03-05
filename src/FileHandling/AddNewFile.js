import TextEdit from "../TextEditor/TextEdit";

export default async function AddNewFile(event, newParams, setEditorId){
    event.preventDefault();
    
    let newEditorContent = [{
        type: 'paragraph',
        children: [{ text: `-x
        ` }],
    }];

    let newTitle = "New File"
    localStorage.setItem('title', newTitle);
    localStorage.setItem('content', JSON.stringify(newEditorContent))

    newParams.setEditorContent(newEditorContent);
    newParams.setTitle(newTitle);
    setEditorId();
    let newEditorCount = newParams.editorChange + 1;
    newParams.setEditorChange(newEditorCount);
    
    return(
        <TextEdit
            editorColors={newParams.editorColors}
            editorContent={newEditorContent}
            setEditorContent={newParams.setEditorContent}
            title={newTitle}
            setTitle={newParams.setTitle}
            editorChange={newEditorCount}
        />
    )
}