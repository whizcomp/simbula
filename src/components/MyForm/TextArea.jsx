import React from "react";
import { useFormikContext } from "formik";
export default function TextArea({ label, name, placeholder, ...props }) {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();
  return (
    <div class="mb-3">
      <label for="message" class="form-label fw-bold">
        {label}
      </label>
      <textarea
        class="form-control"
        id={name}
        rows="3"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        {...props}
      ></textarea>
      {errors[name] && touched[name] ? (
        <div className="text-danger">{errors[name]}</div>
      ) : null}
    </div>
  );
}
