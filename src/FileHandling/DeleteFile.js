import CallApi from "../CallApi";
import AddNewFile from "./AddNewFile";

export default async function DeleteFile(event, newParams, editorId, setEditorId){
    let apiParams = GetDeleteParams(event, newParams, editorId);
    let res = await CallApi(apiParams, setEditorId);
    console.log(res);
    AddNewFile(event, newParams, setEditorId);
}

function GetDeleteParams(event, newParams, editorId){
    event.preventDefault();
    
    let apiParams = {
        url: `${process.env.REACT_APP_API_URL}/files/${editorId}`,
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