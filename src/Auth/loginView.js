import { Button, Form, Modal, Spinner, Alert } from 'react-bootstrap';

export default function LoginView({
    isLogin,
    HandleCloseLogin,
    email,
    setEmail,
    password,
    setPassword,
    HandleLogin,
    isLoading,
    error
}){
    return (
    <>
        <Modal dialogClassName='modal-style' show={isLogin} onHide={HandleCloseLogin}>
            <Modal.Header>
                <h3>Log In</h3>
            </Modal.Header>
            <Modal.Body>
                {isLoading ? <Spinner animation='border' size='sm' />
                : <Form>
                    <Form.Control type='email' placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form>}
                {error&&<div className='pink-text-box vertical-margins center-all'>
                    <Alert variant='warning'>{error}</Alert>
                </div>}
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={(e)=>HandleLogin(e)}>Submit</Button>
            <Button onClick={()=>HandleCloseLogin()}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}