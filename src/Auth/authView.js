import React from "react";
import { Button, Form, Spinner, Alert } from 'react-bootstrap';
import CallApi from "../CallApi";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

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
    passType,
    HandleSwitchPassView,

    isLoading,
    error,
}){

    return (
        <div>
            {!isLoading ? 
            <Form>
                {authType === 'registration' && 
                    <Form.Control 
                        type='text' 
                        placeholder='Name' 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                    />}
                <Form.Control type='email' placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <Form.Control type={passType} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span onClick={()=>HandleSwitchPassView()}>{passType==='password'?<BiHide />:<BiShowAlt/>}</span>
            </Form>
            :<div>
                <span>
                    <Spinner animation='border' variant="light"/>
                    <p>Loading... Please Wait</p>
                </span>
            </div>}
            {error&&<div className='pink-text-box vertical-margins center-all'>
                <Alert variant='warning'>{error}</Alert>
            </div>}
            {!isLoading&&<Button onClick={()=>CallApi(apiParams)}>Submit</Button>}
            {!isLoading&&<Button onClick={()=>HandleCloseAuth()}>Close</Button>}
        </div>
    )
}