import React, { useState } from "react";
import { Form, Input, Button, Table } from "antd";

import Layout from "../../components/Layout";

const { Item, useForm } = Form;

const columns = [
  {
    title: "Medication",
    dataIndex: "medication",
    key: "medication",
  },
  {
    title: "Dosage",
    dataIndex: "dosage",
    key: "dosage",
  },
  {
    title: "Instructions",
    dataIndex: "instructions",
    key: "instructions",
  },
];

function DoctorMedications() {
  const [medications, setMedications] = useState([]);
  const [form] = useForm(); // Obtain form instance using useForm

  const onFinish = (values) => {
    // Perform submission logic here (e.g., send data to backend, etc.)

    // Clear form fields after submission
    console.log(medications);
    form.resetFields();
    setMedications([]);
  };

  const handleAddMedication = () => {
    form
      .validateFields(["medication", "dosage", "instructions"])
      .then((values) => {
        setMedications([...medications, values]);
        form.resetFields(["medication", "dosage", "instructions"]);
      });
  };

  return (
    <Layout>
      <h2 className="text-center">Prescription Form</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%" }}>
          <Form
            form={form}
            name="prescriptionForm"
            onFinish={onFinish}
            layout="vertical"
          >
            <Item
              label="Patient Name"
              name="patientName"
              rules={[
                { required: true, message: "Please enter the patient name" },
              ]}
            >
              <Input />
            </Item>

            <h4>Medications:</h4>
            <Item style={{ marginBottom: 10 }}>
              <Item
                label="Medication"
                name="medication"
                style={{ display: "inline-block", marginRight: 16 }}
              >
                <Input />
              </Item>
              <Item
                label="Dosage"
                name="dosage"
                style={{ display: "inline-block", marginRight: 16 }}
              >
                <Input />
              </Item>
              <Item
                label="Instructions"
                name="instructions"
                style={{ display: "inline-block", marginRight: 16 }}
              >
                <Input.TextArea />
              </Item>
              <Button type="dashed" onClick={handleAddMedication}>
                Add Medication
              </Button>
            </Item>

            <Table
              dataSource={medications}
              columns={columns}
              pagination={false}
              //   style={{ marginBottom: "10px" }}
            />

            <Item>
              <button className="btn btn-light mt-2">
                Submit Prescription
              </button>
            </Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorMedications;
