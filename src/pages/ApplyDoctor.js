import React from "react";
import Layout from "../components/Layout";
import { Col, Form, Input, Row, TimePicker } from "antd";

const ApplyDoctor = () => {
  const handleFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <h1 className="text-center">Doctor Application</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4>Personal Details</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstname"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastname"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Last Name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="NIC"
              name="nic"
              required
              maxlength={12}
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your NIC Number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Email Address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              maxlength={12}
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Clinic Address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Phone Number" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialisation"
              name="specialisation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Specialisation" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Price per Consultation"
              name="fees"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Fee Per Consultation" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timing" required>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-light" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
