import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import TextInput from "./MyForm/TextInput";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { accomodation } from "./backend/api";
export default function Accomodation() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const { data } = await accomodation(values);
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };
  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string()
      .min(2, "At least two characters")
      .required("Name is required"),
    phone: Yup.string()
      .min(10, "At least 10 numbers")
      .required("phone number is required"),
    mode: Yup.string()
      .min(2, "At least two characters")
      .required("Name is required"),
    checkin: Yup.date().required("Check in date is required"),
    checkout: Yup.date().required("Check out date is required"),
    adults: Yup.string().required("*required"),
    kids: Yup.string().required("*required"),
    price: Yup.string().required("*required"),
    location: Yup.string().min(2, "at least 2 char"),
  });
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="shadow-lg p-3 mb-4">
            <h3 className="text-center fw-bold">Accomodation</h3>
            <Formik
              initialValues={{
                email: "",
                name: "",
                phone: "",
                mode: "",
                checkin: null,
                checkout: null,
                adults: "",
                kids: "",
                price: "",
                location: "",
              }}
              validationSchema={validateSchema}
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
                        name="mode"
                        label="What type of accommodation are you interested in? (Hotel, Resort, bed and breakfast, etc.)"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput type="date" name="checkin" label="Check In" />
                    </div>

                    <div className="col-12 col-md-6">
                      <TextInput
                        type="date"
                        name="checkout"
                        label="Check Out"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="adults"
                        label="How many  adult guests are staying?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="kids"
                        label="How many  kids guests are staying?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="price"
                        label="Maximum budget per night?"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextInput
                        name="location"
                        label="Do you have any specific location preferences? (Near city center, beachfront, mountain view, etc.)"
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
