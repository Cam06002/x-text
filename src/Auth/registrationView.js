import { Button, Form, Modal } from 'react-bootstrap';

export default function RegistrationView({
    isRegistration,
    HandleCloseRegistration,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword
}){
    return (
        <Modal dialogClassName='modal-style' show={isRegistration} onHide={HandleCloseRegistration}>
            <Modal.Header>
                <h3>Register</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Control type='email' placeholder='email@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>HandleCloseRegistration()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}