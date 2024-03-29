import CallApi from "../CallApi";
import TextEdit from "../TextEditor/TextEdit";
import { Decrypt } from "../Crypt/encryption";

export default async function LoadFile(event, newParams, editorIdent, setEditorId){
    let fileToLoad = await GetFile(event, newParams.apiAddedParams, editorIdent);
    let loadedJournal = fileToLoad.journal.editorValue;
    let decryptedFile = Decrypt(loadedJournal);

    newParams.setEditorContent(decryptedFile);
    let loadedTitle = fileToLoad.journal.title;
    newParams.setTitle(loadedTitle);
    let newEditorCount = newParams.editorChange + 1;
    newParams.setEditorChange(newEditorCount);
    setEditorId(editorIdent);
    
    return(
        <TextEdit
            editorColors={newParams.editorColors}
            editorContent={decryptedFile}
            setEditorContent={newParams.setEditorContent}
            title={loadedTitle}
            setTitle={newParams.setTitle}
            editorChange={newEditorCount}
        />
    )
}

async function GetFile(event, apiAddedParams, editorId){
    let apiParams = GetLoadParams(event, apiAddedParams, editorId);
    let res = await CallApi(apiParams);
    return res;    
}

function GetLoadParams(event, apiAddedParams, editorId){
    event.preventDefault();

    const apiParams = {
        url: `${process.env.REACT_APP_API_URL}/files/${editorId}`,
        callType: 'GET',
        bodyData: null,
        setIsLoading: apiAddedParams.setIsLoading,
        setError: apiAddedParams.setError,
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${apiAddedParams.auth.token}`
        }
    }

    return apiParams;
}