import React from "react";
import "../styles/LoginRegisterStyles.css";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  // Form Handler
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
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="NIC" name="nic">
            <Input type="text" required maxLength={12} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <p className="text-center">
            <button className="btn btn-outline-light" type="submit">
              Register
            </button>
          </p>
          <Link to="/login" className="m-2 link">
            Already a User? Login Here
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
