import { Button, Form, Modal } from 'react-bootstrap';

export default function LoginView({
    isLogin,
    HandleCloseLogin,
    email,
    setEmail,
    password,
    setPassword
}){
    return (
        <Modal dialogClassName='modal-style' show={isLogin} onHide={HandleCloseLogin}>
            <Modal.Header>
                <h3>Log In</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type='email' placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={()=>HandleCloseLogin()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}