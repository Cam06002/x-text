import CallApi from "../CallApi";
import TextEdit from "../TextEditor/TextEdit";

export default async function LoadFile(event, setEditorContent, setTitle, apiAddedParams, editorId){
    let fileToLoad = await GetFile(event, apiAddedParams, editorId);
    let loadedJournal = fileToLoad.journal.editorValue;
    setEditorContent(loadedJournal);
    let loadedTitle = fileToLoad.journal.title;
    setTitle(loadedTitle);

    return(
        <TextEdit
            editorColors={newParams.editorColors}
            editorContent={newEditorContent}
            setEditorContent={newParams.setEditorContent}
            title={newParams.title}
            setTitle={newParams.setTitle}
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
    }

    return apiParams;
}