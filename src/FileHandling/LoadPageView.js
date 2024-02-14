import React from "react";
import { Modal, Button } from 'react-bootstrap';
import LoadedEditorsCards from "./LoadedEditorsCards";

export default function LoadPageView({
    openLoaderPage,
    HandleCloseLoader,
    newParams,
    loadedEditors,
    setEditorId
}){
    return (
        <Modal dialogClassName='modal-style' show={openLoaderPage} onHide={HandleCloseLoader}>
            <Modal.Header>
                <h3>Choose File To Load</h3>
            </Modal.Header>
            <Modal.Body>
                {loadedEditors&&<LoadedEditorsCards 
                    newParams={newParams}
                    loadedEditors={loadedEditors}
                    HandleCloseLoader={HandleCloseLoader}
                    setEditorId={setEditorId}
                />}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={()=>HandleCloseLoader()}
                >Close</Button>
            </Modal.Footer>
        </Modal>
    )
}