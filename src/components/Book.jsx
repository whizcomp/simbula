import { Formik } from "formik";
import React from "react";
import TextInput from "./MyForm/TextInput";
import TextArea from "./MyForm/TextArea";

export default function Book() {
  return (
    <div className="container mt-5 pt-5">
      <h1>Book/Inquire now</h1>

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
  );
}
