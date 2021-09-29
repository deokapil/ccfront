import React from "react";
import { ErrorMessage, Field } from "formik";

const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="form-label">
        Disclaimer Text <span class="text-danger">*</span>{" "}
        <span class="float-right">0/150</span>
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="form-control"
      />
      <ErrorMessage component="div" name={label} className="formError" />
    </div>
  );
};

export default TextArea;
