import { Button, Form, Modal } from 'react-bootstrap';

export default function LoginView({
    isLogin,
    HandleCloseLogin
}){
    return (
        <Modal dialogClassName='modal-style' show={isLogin} onHide={HandleCloseLogin}>
            <Modal.Header>
                <h3>Log In</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type='email' placeholder='email@example.com'/>
                    <Form.Control type='password'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={()=>HandleCloseLogin()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}