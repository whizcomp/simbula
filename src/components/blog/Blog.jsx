import React, { useState, useEffect } from "react";
import TextInput from "../MyForm/TextInput";
import TextArea from "../MyForm/TextArea";
import { Formik, Field } from "formik";
import { apiPostBlog } from "../backend/api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Blog() {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageURL(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const sendPost = async (values) => {
    console.log(values);
    try {
      const image = await sendFile(selectedImage);
      console.log(image);
      const data = {
        image,
        title: values.title,
        description: values.description,
        content: editorContent,
      };
      const res = await apiPostBlog(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const [imageURL, setImageURL] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const sendFile = async (value) => {
    try {
      const data = new FormData();
      data.append("file", value);
      data.append("upload_preset", "yn2cafer");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dl64x2hhj/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const response = await res.json();
      return response.secure_url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: null,
          editor: "",
        }}
        onSubmit={(values) => sendPost(values)}
      >
        {({ handleSubmit, values, setFieldValue, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">New Article</h1>
            <TextInput
              label="Title of the article"
              name="title"
              placeholder="Enter the article title here"
            />
            <div className="py-2">
              <label htmlFor="image">Image to display</label>
              <input
                type="file"
                name="image"
                placeholder="Image to display"
                className="form-control"
                onChange={(event) => handleImageUpload(event, setFieldValue)}
              />
            </div>
            <TextInput
              label="Description"
              name="description"
              placeholder="Enter article description here"
            />
            <div className="pb-4">
              <label htmlFor="editor">Content</label>
              <ReactQuill
                id="editor"
                theme="snow"
                value={editorContent}
                onChange={(value) => {
                  setFieldValue("content", value); // Update the 'content' field value in Formik
                  setEditorContent(value); // Update the editor content state
                }}
              />
            </div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary"
              type="button"
            >
              Preview
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Article Preview
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-4"></div>
                        <div className="col-6"></div>

                        <h1 className="py-4">{values.title}</h1>

                        {imageURL && (
                          <div className="d-flex flex-column mx-auto d-block">
                            <img
                              src={imageURL}
                              className="img-fluid mx-auto"
                              style={{ height: 400 }}
                              alt="Selected"
                            />
                          </div>
                        )}

                        <div className="py-3 justify-content-lg-center">
                          <a
                            href="https://facebook.com/MiAgroUg"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i
                              className="bi bi-facebook pe-5"
                              style={{ fontSize: 25 }}
                            ></i>
                          </a>
                          <a
                            href="https://twitter.com/MiAgro_Ug"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i
                              className="bi bi-twitter pe-5"
                              style={{ fontSize: 25 }}
                            ></i>
                          </a>
                          <a
                            href="https://instagram.com/miagroug"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i
                              className="bi bi-instagram pe-5"
                              style={{ fontSize: 25, color: "tomato" }}
                            ></i>
                          </a>
                        </div>
                        <h6 className="fst-italic pt-3">
                          {values.description}
                        </h6>
                        <div
                          className="mt-4"
                          dangerouslySetInnerHTML={{ __html: editorContent }}
                        ></div>
                      </div>
                      <hr />
                    </div>
                    <div className="col-2"></div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      class="btn btn-primary"
                    >
                      publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
