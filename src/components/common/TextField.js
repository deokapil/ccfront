import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, required, noLabel, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {!noLabel && (
        <label className="form-label" htmlFor={field.name}>
          {label}
        </label>
      )}
      {required && !noLabel && <span className="text-danger">*</span>}

      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
        placeholder={label}
      />
      <ErrorMessage component="div" name={field.name} className="formError" />
    </>
  );
};

export default TextField;
