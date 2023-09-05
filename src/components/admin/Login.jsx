import { Formik } from "formik";
import React, { useContext, useState } from "react";
import TextInput from "../MyForm/TextInput";
import logo from "../../assets/logo.png";
import { login } from "../backend/api";
import UserContext from "../backend/userContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be more than six characters")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const { data, headers } = await login(email, password);
      localStorage.setItem("token", headers["x-login"]);
      setUser(data);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="mt-5 pt-5">
      <div className="shadow-lg container mb-5 p-5 col-12 col-md-6">
        <div className="text-center">
          <img src={logo} width="100" className="mx-auto" />
        </div>

        <h1 className="text-center text-bright pt-5">Staff Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validateSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <TextInput label="Email" name="email" />
              <TextInput label="Password" name="password" type="password" />
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
