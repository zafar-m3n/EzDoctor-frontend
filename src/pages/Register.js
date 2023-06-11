import React from "react";
import "../styles/LoginRegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  // Form Handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Registered Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
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
