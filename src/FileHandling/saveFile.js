import CallApi from "../CallApi";

export default async function SaveFile(event, editorContent, title, apiAddedParams){
    let apiParams = GetSaveParams(event, editorContent, title, apiAddedParams);
    let res = await CallApi(apiParams);
    console.log(res);
    return res;
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