import CallApi from "../CallApi";
import TextEdit from "../TextEditor/TextEdit";

export default async function LoadFile(event, newParams, editorIdent, setEditorId){
    let fileToLoad = await GetFile(event, newParams.apiAddedParams, editorIdent);
    let loadedJournal = fileToLoad.journal.editorValue;
    console.log(loadedJournal);
    newParams.setEditorContent(loadedJournal);
    let loadedTitle = fileToLoad.journal.title;
    newParams.setTitle(loadedTitle);
    let newEditorCount = newParams.editorChange + 1;
    newParams.setEditorChange(newEditorCount);
    setEditorId(editorIdent);
    
    return(
        <TextEdit
            editorColors={newParams.editorColors}
            editorContent={loadedJournal}
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
    console.log(res);
    return res;    
}

function GetLoadParams(event, apiAddedParams, editorId){
    event.preventDefault();

    const apiParams = {
        url: `http://localhost:5000/api/files/${editorId}`,
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