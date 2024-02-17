import React from "react";
import { Button } from 'react-bootstrap';
import LoadedEditorsCards from "./LoadedEditorsCards";

export default function LoadPageView({
    HandleCloseLoader,
    newParams,
    loadedEditors,
    setEditorId
}){
    return (
        <div>
            <h3>Choose File To Load</h3>
            {loadedEditors&&<LoadedEditorsCards 
                newParams={newParams}
                loadedEditors={loadedEditors}
                HandleCloseLoader={HandleCloseLoader}
                setEditorId={setEditorId}
            />}
            {!newParams.apiAddedParams.isLoading&&<Button
                onClick={()=>HandleCloseLoader()}
            >Close</Button>}
        </div>
    )
}