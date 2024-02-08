import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function AllFiles({
    setEditorContent,
    setTitle
}){
    return(
        <Modal>
            <Modal.Header>
                <h3>Select A File to Load</h3>
            </Modal.Header>
        </Modal>
    )
}