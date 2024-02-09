import CallApi from "../CallApi";

export default function SaveFile(event, editorContent, title, apiAddedParams){
    let apiParams = GetSaveParams(event, editorContent, title, apiAddedParams);
    CallApi(apiParams);
}

function GetSaveParams(event, editorContent, title, apiAddedParams){

    event.preventDefault();
    let bodyData = JSON.stringify({
        title: title,
        creator: apiAddedParams.auth.userId,
        editorContent: editorContent
    });

    const apiParams = {
        url: 'http://localhost:5000/api/files/',
        callType: 'POST',
        bodyData: bodyData,
        setIsLoading: apiAddedParams.setIsLoading,
        setError: apiAddedParams.setError,
    }

    return apiParams;
}