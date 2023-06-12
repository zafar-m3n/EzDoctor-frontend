import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

const BookingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState();
  const [timings, setTimings] = useState();
  const [isAvailable, setIsAvailable] = useState();
  const params = useParams();
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1>Booking Page</h1>
      <div className="container m-2">
        {doctors && (
          <div>
            <h4>
              Dr. {doctors.firstName} {doctors.lastName}
            </h4>
            <h4>Fees: {doctors.fees}</h4>
            <h4>
              Available Time: {doctors.timings[0]} - {doctors.timings[1]}
            </h4>
            <div className="d-flex flex-column w-50">
              <DatePicker
                className="m-2"
                format="DD-MM-YYY"
                onChange={(value) => setDate(moment(value).format("DD-MM-YYY"))}
              />
              <TimePicker.RangePicker
                className="m-2"
                format="HH:mm"
                onChange={(values) =>
                  setTimings([
                    moment(values[0]).format("HH-mm"),
                    moment(values[1]).format("HH-mm"),
                  ])
                }
              />
              <button className="btn btn-outline-light m-2">
                Check Availability
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
