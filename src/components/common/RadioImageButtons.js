import React from "react";
import { ErrorMessage, Field } from "formik";

const RadioImageButtons = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="col-lg-1 col-md-2 col-sm-2">
                  <div className="form-check radio-image">
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                      className="form-check-input"
                    />
                    <label htmlFor={option.value} className="form-check-label">
                      <img src={option.img} alt="icon1" />
                      <span>{option.key}</span>
                    </label>
                  </div>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component="div" name={label} className="formError" />;
    </>
  );
};

export default RadioImageButtons;
