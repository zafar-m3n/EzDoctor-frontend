import React from "react";
import "../styles/LoginRegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Form Handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong!");
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
