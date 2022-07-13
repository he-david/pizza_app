// Styles
import { Button, Form } from "react-bootstrap";

const Login = () => {
    return (
        <div className="text-white text-uppercase">
            <h1 className="text-center" style={{ fontSize: "4rem" }}>Login</h1>
            <div className="d-flex justify-content-center">
                <Form className="w-50">
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: ".9rem" }}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: ".9rem" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="w-100" variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;