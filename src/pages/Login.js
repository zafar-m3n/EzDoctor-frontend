import React from "react";
import "../styles/LoginRegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  //   Form Handler
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <p className="text-center">
            <button className="btn btn-outline-light" type="submit">
              Login
            </button>
          </p>
          <Link to="/register" className="m-2 link">
            Not Yet Registered? Register Here
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
