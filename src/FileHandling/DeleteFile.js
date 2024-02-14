import CallApi from "../CallApi";
import AddNewFile from "./AddNewFile";

export default async function DeleteFile(event, newParams, editorId, setEditorId){
    let apiParams = GetDeleteParams(event, newParams, editorId);
    let res = await CallApi(apiParams, setEditorId);
    console.log(res);
    AddNewFile(event, newParams);
}

function GetDeleteParams(event, newParams, editorId){
    event.preventDefault();
    
    let apiParams = {
        url: `http://localhost:5000/api/files/${editorId}`,
        callType: 'DELETE',
        bodyData: null,
        setIsLoading: newParams.apiAddedParams.setIsLoading,
        setError: newParams.apiAddedParams.setError,
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${newParams.apiAddedParams.auth.token}`
        }
    }

    return apiParams;
}