import React from "react";
import { Field, useFormikContext } from "formik";
export default function SelectField({
  options,
  option_name,
  option_id,
  name,
  title,
}) {
  const { errors, touched } = useFormikContext();
  return (
    <div className="pb-3">
      <label for={name} className="form-label fw-bold">
        {title}
      </label>
      <Field as="select" className="form-select" name={name}>
        {options.map((option) => (
          <option key={option[option_id]} value={option[option_id]}>
            {option[option_name]}
          </option>
        ))}
      </Field>
      {errors[name] && touched[name] ? (
        <div className="text-danger">{errors[name]}</div>
      ) : null}
    </div>
  );
}
