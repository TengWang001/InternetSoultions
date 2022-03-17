//Clinton's code goes here
import { Container } from "react-bootstrap";

const LoginPage = () => {
    return (
        <Container className="justify-content-center">
            <form>
                <h3>Sign In Page</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>

        </Container>
    );
};

export default LoginPage;

