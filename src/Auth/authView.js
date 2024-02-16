import React from "react";
import { Button, Form, Modal, Spinner, Alert } from 'react-bootstrap';
import CallApi from "../CallApi";
import ReactDOM from "react-dom";

export default function AuthView({
    authType,
    HandleCloseAuth,
    apiParams,

    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,

    isLoading,
    error,
}){
    const authPage =
        <Modal dialogClassName='modal-style' show={authType} onHide={HandleCloseAuth} fullscreen={true}>
            <Modal.Header>
                {authType === 'login' ? <h3>Login</h3> : <h3>Register</h3>}
            </Modal.Header>
            <Modal.Body>
                {isLoading ? <Spinner animation='border' size='sm' />
                : <Form>
                    {authType === 'registration' && 
                        <Form.Control 
                            type='text' 
                            placeholder='Name' 
                            value={name} 
                            onChange={(e)=>setName(e.target.value)}
                        />}
                    <Form.Control type='email' placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form>}
                {error&&<div className='pink-text-box vertical-margins center-all'>
                    <Alert variant='warning'>{error}</Alert>
                </div>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>CallApi(apiParams)}>Submit</Button>
                <Button onClick={()=>HandleCloseAuth()}>Close</Button>
            </Modal.Footer>
        </Modal>
    
    return ReactDOM.createPortal(authPage, document.getElementById("auth-modal"));
}