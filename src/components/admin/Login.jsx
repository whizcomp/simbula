import { Formik } from "formik";
import React from "react";
import TextInput from "../MyForm/TextInput";
import logo from "../../assets/logo.png";
export default function Login() {
  return (
    <div className="mt-5 pt-5">
      <div className="shadow-lg container mb-5 p-5 col-12 col-md-6">
        <div className="text-center">
          <img src={logo} width="100" className="mx-auto" />
        </div>

        <h1 className="text-center text-bright pt-5">Staff Login</h1>

        <Formik initialValues={{ email: "", password: "" }}>
          {() => (
            <form action="">
              <TextInput label="Email" name="email" />
              <TextInput label="Password" name="password" type="password" />
              <button className="btn btn-primary">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
