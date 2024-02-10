import React from "react";
import { Modal } from 'react-bootstrap';
import LoadedEditorsCards from "./LoadedEditorsCards";

export default function LoadPageView({
    openLoaderPage,
    HandleCloseLoader,
    apiAddedParams,
    loadedEditors,
    setEditorContent,
    setTitle
}){
    return (
        <Modal dialogClassName='modal-style' show={openLoaderPage} onHide={HandleCloseLoader}>
            <Modal.Header>
                <h3>Choose File To Load</h3>
            </Modal.Header>
            <Modal.Body>
                {loadedEditors&&<LoadedEditorsCards 
                    apiAddedParams={apiAddedParams}
                    loadedEditors={loadedEditors}
                    setEditorContent={setEditorContent}
                    setTitle={setTitle}
                />}
                {!loadedEditors&&<h3>No Files Found</h3>}
            </Modal.Body>
        </Modal>
    )
}