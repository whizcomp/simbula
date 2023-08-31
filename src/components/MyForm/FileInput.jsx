import { useFormikContext } from "formik";
import React from "react";

export default function FileInput({ label, name, ...props }) {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext();
  return (
    <>
      <div className="pt-2">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          className="form-control"
          name={name}
          type="file"
          onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
          }}
          {...props}
        />
        {touched[name] && errors[name] && (
          <div className="text-danger">{errors[name]}</div>
        )}
      </div>
    </>
  );
}
