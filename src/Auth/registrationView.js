import { Button, Form, Modal } from 'react-bootstrap';

export default function RegistrationView({
    isRegistration,
    HandleCloseRegistration
}){
    return (
        <Modal dialogClassName='modal-style' show={isRegistration} onHide={HandleCloseRegistration}>
            <Modal.Header>
                <h3>Register</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type='text' placeholder='Name'/>
                    <Form.Control type='email' placeholder='email@example.com'/>
                    <Form.Control type='password'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>HandleCloseRegistration()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}