import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import { Button, Container, Form } from "react-bootstrap";

// Hooks
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [inputClass, setInputClass] = useState("border-danger");
    const { isLoggedIn, logIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (logIn(username, password)) {
            setUsername("");
            setPassword("");
            navigate("/");
        }
    }

    return (
        (!isLoggedIn ? (
            <div className="text-white text-uppercase">
                <h1 className="text-center" style={{ fontSize: "4rem" }}>Login</h1>
            <div className="d-flex justify-content-center">
                <Form className="w-50" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: ".9rem" }}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" className={inputClass} value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: ".9rem" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className={inputClass} value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
                    </Form.Group>
                    <Button className="w-100" variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <Container>
                
            </Container>
            {inputClass === "border-danger" && (
                <div className="justify-content-center d-flex mt-3">
                    <div className="bg-white w-50 text-center">
                        <p className="text-danger">Username or password is incorrect!</p>
                    </div>
                </div>
            )}
            </div>
        ): <h1>You are already logged in!</h1>)
        
    );
}

export default Login;