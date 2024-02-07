import { Button, Form, Modal, Spinner, Alert } from 'react-bootstrap';

export default function RegistrationView({
    isRegistration,
    HandleCloseRegistration,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    HandleRegister,
    isLoading,
    error
}){
    return (
        <>
        <Modal dialogClassName='modal-style' show={isRegistration} onHide={HandleCloseRegistration}>
            <Modal.Header>
                <h3>Register</h3>
            </Modal.Header>
            <Modal.Body>
                {isLoading ? <Spinner animation='border' size='sm' />
                : <Form>
                    <Form.Control type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Control type='email' placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form>}
                {error&&<div className='pink-text-box vertical-margins center-all'>
                    <Alert variant='warning'>{error}</Alert>
                </div>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e)=>HandleRegister(e)}>Submit</Button>
                <Button onClick={()=>HandleCloseRegistration()}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}