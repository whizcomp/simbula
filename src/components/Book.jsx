import { Formik } from "formik";
import React from "react";
import TextInput from "./MyForm/TextInput";
import TextArea from "./MyForm/TextArea";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Book() {
  return (
    <div className="container mt-5 pt-5">
      <h1>Book/Inquire now</h1>
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="p-3">
            <Formik initialValues={{ email: "", name: "", message: "" }}>
              {({ handleSubmit, isSubmitting }) => (
                <form>
                  <TextInput name="name" label="Full Name" />
                  <TextInput name="email" label="Email" />
                  <TextInput name="phone" label="Phone Number" />
                  <TextInput name="country" label="Residing Country" />

                  <TextArea
                    name="message"
                    label="Message"
                    placeholder="write your message"
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
        <div className="col-12 col-md-5">
          <div className="container ps-5 ">
            <h3 className="text-bright text-center">Reach out</h3>
            <div className="d-flex pt-5">
              <FaPhoneAlt size={40} />
              <p className="fs-4 ps-3">+1(289)547-2690 </p>
            </div>
            <div className="d-flex pt-5">
              <FaPhoneAlt size={40} />
              <p className="fs-4 ps-3">+256778194000 -Uganda</p>
            </div>
            <div className="d-flex pt-5">
              <FaWhatsapp size={40} style={{ color: "#25D366" }} />
              <p className="fs-4 ps-3"> +256778194000 -Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
