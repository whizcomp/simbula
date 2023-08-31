import React from "react";
import { Formik } from "formik";
export default function FormField({
  initialValues,
  onSubmit,
  validationSchema,
  handleSubmit,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <>{children}</>}
    </Formik>
  );
}
