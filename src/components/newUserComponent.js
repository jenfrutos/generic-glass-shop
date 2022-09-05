import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const NewUser = () => {

    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState([{
        firstName: '',
        lastName: '',
        business: '',
        userName: '',
        password: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
    }]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        alert(JSON.stringify(user));
    };

    return (
        <Container>
            <h1>Create New Account</h1>
            <h6>Information will be stored for future orders</h6>
            <Form noValidate validated={validated} onSubmit={handleSubmit} id="userInfo">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                        <FloatingLabel controlId="firstName" label="First Name" >
                            <Form.Control placeholder="First Name" required onChange={e => setUser({ firstName: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel controlId="lastName" label="Last Name">
                            <Form.Control placeholder="Last Name" required onChange={e => setUser({ ...user, lastName: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="business">
                        <FloatingLabel controlId="business" label="Business, Company, etc." >
                            <Form.Control placeholder="Business, Company, etc." onChange={e => setUser({ ...user, business: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="userName">
                        <FloatingLabel controlId="email" label="Email" >
                            <Form.Control placeholder="Email" required onChange={e => setUser({ ...user, email: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel controlId="password" label="Password">
                            <Form.Control type="password" placeholder="Password" required onChange={e => setUser({ ...user, password: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel controlId="address" label="Address">
                            <Form.Control type="address" placeholder="Address" required onChange={e => setUser({ ...user, address: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel controlId="address2" label="Apt, Unit, Suite, ect.">
                            <Form.Control type="address2" placeholder="Apt, Unit, Suite, ect." onChange={e => setUser({ ...user, address2: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel controlId="city" label="City">
                            <Form.Control placeholder="City" required onChange={e => setUser({ ...user, city: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <FloatingLabel controlId="state" label="State">
                            <Form.Control placeholder="State" required onChange={e => setUser({ ...user, state: e.target.value })} />
                        </FloatingLabel >
                    </Form.Group >

                    <Form.Group as={Col} controlId="formGridZip">
                        <FloatingLabel controlId="zip" label="Zip">
                            <Form.Control placeholder="zip" required onChange={e => setUser({ ...user, zip: e.target.value })} />
                        </FloatingLabel>
                    </Form.Group>
                </Row >
                <div className="d-grid gap-2">
                    <Button variant="dark" onClick={handleSubmit}>Create New User</Button>
                </div>
            </Form >
        </Container >
    )
}
export default NewUser;