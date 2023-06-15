import React, { useState } from "react";
import { Form, Input, Row, Col, DatePicker } from "antd";
import Layout from "../../components/Layout";

const DoctorReports = () => {
    const [date, setDate] = useState("");
  const onFinish = () => {};

  return (
    <Layout>
      <h2 className="text-center">Upload Patient Report</h2>
      <Form name="doctorReportsForm" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Lab Reference No:"
              name="refNumber"
              rules={[
                {
                  required: true,
                  message:
                    "Please enter the reference number of the blood sample",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Patient Name"
              name="patientName"
              rules={[
                { required: true, message: "Please enter the patient name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Date of Report"
              name="dateOfReport"
              rules={[
                {
                  required: true,
                  message: "Please enter the date of the report",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                aria-required={"true"}
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setDate(value); // Store moment object in state
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <h6>Complete Blood Count (CBC)</h6>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Hemoglobin (Hb)" name="hemoglobin">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="White Blood Cell Count (WBC)" name="wbc">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Platelet Count" name="plateletCount">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <h6>Blood Chemistry</h6>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Glucose" name="glucose">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Total Cholesterol" name="totalCholesterol">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Triglycerides" name="triglycerides">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <h6>Liver Function Tests</h6>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="ALT" name="alt">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="AST" name="ast">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <h6>Kidney Function Tests</h6>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Blood Urea Nitrogen (BUN)" name="bun">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Creatinine" name="creatinine">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <h6>Iron Studies</h6>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Serum Iron" name="serumIron">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Total Iron-Binding Capacity (TIBC)" name="tibc">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Ferritin" name="ferritin">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Form.Item>
              <button className="btn btn-light mt-2">Upload Report</button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default DoctorReports;
