import { Formik } from "formik";
import React from "react";
import TextInput from "./MyForm/TextInput";
import TextArea from "./MyForm/TextArea";
import SelectField from "./MyForm/SelectField";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Book() {
  const safariExperience = [
    { id: 1, option: "Wildlife viewing" },
    { id: 1, option: "photography" },
    { id: 1, option: "Camping" },
    { id: 1, option: "Luxury Lodge" },
  ];
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="shadow-lg p-3 mb-3">
            <h3 className="fw-bold text-center py-2">Book/Inquire now</h3>
            <Formik
              initialValues={{
                email: "",
                name: "",
                phone: "",
                country: "",
                experience: "",
                inquire: "",
                message: "",
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form>
                  <div className="row">
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
                      <TextInput name="country" label="Residing Country" />
                    </div>
                  </div>
                  <SelectField
                    options={safariExperience}
                    option_name="option"
                    option_id="id"
                    title="What type of safari experience are you interested in?"
                    name="experience"
                  />
                  <TextInput
                    name="inquire"
                    label="How did you hear about us?"
                  />

                  <TextArea
                    name="message"
                    label="Message"
                    placeholder="Anything you want to add?"
                  />
                  <div class="d-grid gap-2 py-4">
                    <button class="btn btn-primary" type="button">
                      Send Message
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
              <p className="fs-5 ps-3">+1(289)547-2690 </p>
            </div>
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
