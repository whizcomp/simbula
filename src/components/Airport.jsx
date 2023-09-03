import { Formik } from "formik";
import React from "react";
import TextInput from "./MyForm/TextInput";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { airport } from "./backend/api";

export default function Airport() {
  const handleSubmit = async (values) => {
    try {
      const { data } = await airport(values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="shadow-lg p-3 mb-4">
            <h3 className="fw-bold text-center">Airport Transfer</h3>
            <Formik
              initialValues={{
                email: "",
                name: "",
                phone: "",
                arrival_port: "",
                depart_port: "",
                flight_arrival_number: "",
                flight_depart_number: "",
                pass: "",
                one_way: "",
                vehicle: "",
                special_needs: "",
                pick_up: "",
              }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div className="row p-3">
                    <div className="col-12 col-md-6">
                      <TextInput name="name" label="Full Name" />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput name="email" label="Email" />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput name="phone" label="Phone Number" />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="arrival_port"
                        label="What is your arrival  airport?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="depart_port"
                        label="What is your departure  airport?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="flight_arrival_number"
                        label="What is the airline and flight number for your arriving flight?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="flight_depart_number"
                        label="What is the airline and flight number for your  departing flight?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="pass"
                        label="How many passengers need a transfer? (Adults/Children)"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="one_way"
                        label="Do you require a one-way or return transfer?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="vehicle"
                        label="Type of vehicle do you prefer? (Sedan, SUV, minibus etc.)"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="special_needs"
                        label="Do you have any special needs we should be aware of? (Wheelchair access, child seats, etc.)"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="pick_up"
                        label="Would you like your driver to meet you inside the airport terminal or curbside?"
                      />
                    </div>
                  </div>
                  <div className="d-grid gap-2 pb-4">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="shadow-lg container p-5 ">
            <h3 className="text-bright text-center">Reach out</h3>

            <div className="d-flex pt-5">
              <FaPhoneAlt size={40} />
              <p className="fs-5 ps-3">+256778194000 -Uganda</p>
            </div>
            <div className="d-flex pt-5">
              <FaWhatsapp size={40} style={{ color: "#25D366" }} />
              <p className="fs-5 ps-3"> +256778194000 -Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
