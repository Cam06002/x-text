import CallApi from "../CallApi";
import TextEdit from "../TextEditor/TextEdit";

export default async function AddNewFile(event, newParams){
    let newEditorContent = JSON.stringify([{
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    }]);

    let newTitle = "New File"

    console.log(newEditorContent);

    localStorage.setItem('content', newEditorContent);
    newParams.setEditorContent(newEditorContent);
    newParams.setTitle(newTitle);

    if(newParams.apiAddedParams.auth.isLoggedIn){
        let apiParams = GetSaveParams(event, newEditorContent, newTitle, newParams.apiAddedParams);
        let res = await CallApi(apiParams);
        console.log(res);
    }

    window.location.reload();

    return(
        <TextEdit
            editorColors={newParams.editorColors}
            editorContent={newEditorContent}
            setEditorContent={newParams.setEditorContent}
            title={newParams.title}
            setTitle={newParams.setTitle}
        />
    )
}


function GetSaveParams(event, editorContent, title, apiAddedParams){

    event.preventDefault();
    let bodyData = JSON.stringify({
        title: title,
        creator: apiAddedParams.auth.userId,
        editorValue: editorContent
    });

    console.log(apiAddedParams.auth.userId);

    const apiParams = {
        url: 'http://localhost:5000/api/files',
        callType: 'POST',
        bodyData: bodyData,
        setIsLoading: apiAddedParams.setIsLoading,
        setError: apiAddedParams.setError,
    }

    return apiParams;
}