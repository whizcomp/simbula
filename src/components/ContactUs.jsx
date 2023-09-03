import { Formik } from "formik";
import React from "react";
import TextInput from "../components/MyForm/TextInput";
import TextArea from "../components/MyForm/TextArea";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { message } from "./backend/api";
export default function ContactUs() {
  const handleSubmit = async (values) => {
    try {
      const { data } = await message(values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <h1>Contact us</h1>
        <div className="col-12 col-md-8 mb-4">
          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextInput name="name" label="Name" />
                <TextInput name="email" label="Email" />
                <TextArea
                  name="message"
                  label="Message"
                  placeholder="write your message"
                />
                <div class="d-grid gap-2 py-4">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="d-none d-sm-block col-md-4">
          <h5 className="header text-md-center">Social media</h5>
          <div className="">
            <div className="d-flex flex-column align-items-md-center ps-md-5 pt-2">
              <div className="d-flex flex-column">
                <a
                  href="https://facebook.com/MiAgroUg"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  <AiFillFacebook
                    size="35"
                    style={{ paddingRight: "3px", color: "blue" }}
                  />
                  <span className="fs-5 fw-medium">Facebook</span>
                </a>

                <a
                  href="https://twitter.com/simbulasafaris"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  <FaTwitterSquare
                    size="35"
                    style={{ padding: "2px", color: "#1DA1F2" }}
                  />
                  <span className="fs-5 fw-medium">Twitter</span>
                </a>

                <a
                  href="https://instagram.com/miagroug"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram
                    size="35"
                    style={{ padding: "2px", color: "#E1306C" }}
                  />
                  <span className="fs-5 fw-medium">Instagram</span>
                </a>

                <a
                  href="https://wa.me/256778194000"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {" "}
                  <FaWhatsapp
                    size="35"
                    style={{ padding: "2px", color: "#25D366" }}
                  />
                  <span className="fs-5 fw-medium">Whatsapp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
