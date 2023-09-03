import { useFormikContext } from "formik";
import React from "react";

export default function TextInput({
  label,
  name,
  placeholder,
  type = "text",
  ...props
}) {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="form-label fw-medium">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          {...props}
        />
        {errors[name] && touched[name] ? (
          <div className="text-danger">{errors[name]}</div>
        ) : null}
      </div>
    </>
  );
}
