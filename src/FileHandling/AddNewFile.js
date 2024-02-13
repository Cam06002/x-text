import TextEdit from "../TextEditor/TextEdit";

export default async function AddNewFile(event, newParams){
    event.preventDefault();
    
    let newEditorContent = [{
        type: 'paragraph',
        children: [{ text: 'Delete me to start your new file.' }],
    }];

    let newTitle = "New File"
    localStorage.setItem('title', newTitle);
    localStorage.setItem('content', JSON.stringify(newEditorContent))
    console.log(newEditorContent);

    newParams.setEditorContent(newEditorContent);
    newParams.setTitle(newTitle);
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