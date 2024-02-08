export default function SaveFile(event, editorContent, title){
    event.preventDefault();
    let fileJson = JSON.stringify({
        title: title,
        editorContent: editorContent
    })
    console.log(fileJson);
}