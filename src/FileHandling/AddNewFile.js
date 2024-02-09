import CallApi from "../CallApi";

export default async function AddNewFile(event, setEditorContent, title, apiAddedParams){
    let newEditorContent = [{
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    }];

    setEditorContent(newEditorContent);

    if(apiAddedParams.auth.isLoggedIn){
        let apiParams = GetSaveParams(event, newEditorContent, title, apiAddedParams);
        let res = await CallApi(apiParams);
        console.log(res);
        return res;
    }
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