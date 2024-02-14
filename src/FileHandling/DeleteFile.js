import CallApi from "../CallApi";

export default async function DeleteFile(event, newParams, editorId, setEditorId){
    let apiParams = GetDeleteParams(event, newParams, editorId);
    let res = await CallApi(apiParams, setEditorId);
    console.log(res);
    return res;
}

function GetDeleteParams(event, newParams, editorId){
    event.preventDefault();
    
}