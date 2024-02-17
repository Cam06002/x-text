import React from "react";
import { Button, Form, Spinner, Alert } from 'react-bootstrap';
import CallApi from "../CallApi";

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
    return (
        <div>
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
            {!isLoading&&<Button onClick={()=>CallApi(apiParams)}>Submit</Button>}
            {!isLoading&&<Button onClick={()=>HandleCloseAuth()}>Close</Button>}
        </div>
    )
}