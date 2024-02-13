import CallApi from "../CallApi";
import TextEdit from "../TextEditor/TextEdit";

export default async function AddNewFile(event, newParams){
    let newEditorContent = [{
        type: 'paragraph',
        children: [{ text: 'Delete me to start your new file.' }],
    }];

    let newTitle = "New File"

    console.log(newEditorContent);

    newParams.setEditorContent(newEditorContent);
    newParams.setTitle(newTitle);
    let newEditorCount = newParams.editorChange + 1;
    newParams.setEditorChange(newEditorCount);

    if(newParams.apiAddedParams.auth.isLoggedIn){
        let apiParams = GetSaveParams(event, newEditorContent, newTitle, newParams.apiAddedParams);
        let res = await CallApi(apiParams);
        console.log(res);
    }

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