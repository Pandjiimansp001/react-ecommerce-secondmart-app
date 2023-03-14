import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase.config";

import Helmet from "../components/Helmet/Helmet";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log(user);
      setLoading(false);

      toast.success("Successfully Login!");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <Container>
        <section>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto mb-5 text-center">
                <h3 className="fw-bold mb-4">Login</h3>
                <Form className="auth__form" onSubmit={signin}>
                  <FormGroup className="form__group">
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormGroup>
                  <button type="submit" className="buy__btn auth__btn">
                    Login
                  </button>
                  <p className="mt-3">
                    Don't have any account?{" "}
                    <Link className="text-light" to="/signup">
                      Create an account Now!
                    </Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </section>
      </Container>
    </Helmet>
  );
};

export default Login;
