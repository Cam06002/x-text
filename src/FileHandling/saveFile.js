import CallApi from "../CallApi";
import { Encrypt } from "../Crypt/encryption";

export default async function SaveFile(event, newParams, editorId, setEditorId){
    let apiParams = GetSaveParams(event, newParams, editorId);
    let res = await CallApi(apiParams, setEditorId);
    console.log(res);
    return res;
}

function GetSaveParams(event, newParams, editorId){
    event.preventDefault();
    let editorJson = JSON.stringify(editorId);
    let encryptedObj = Encrypt(editorJson);
    console.log(encryptedObj);
    
    let bodyData = JSON.stringify({
        title: newParams.title,
        creator: newParams.apiAddedParams.auth.userId,
        editorValue: newParams.editorContent
    });

    let apiParams;

    if(editorId){
        apiParams = {
            url: `${process.env.REACT_APP_API_URL}/files/${editorId}`,
            callType: 'PATCH',
            bodyData: bodyData,
            setIsLoading: newParams.apiAddedParams.setIsLoading,
            setError: newParams.apiAddedParams.setError,
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${newParams.apiAddedParams.auth.token}`
            }
        }
    } else {
        apiParams = {
            url: `${process.env.REACT_APP_API_URL}/files`,
            callType: 'POST',
            bodyData: bodyData,
            setIsLoading: newParams.apiAddedParams.setIsLoading,
            setError: newParams.apiAddedParams.setError,
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${newParams.apiAddedParams.auth.token}`
            }
        }
    }
    return apiParams;
}