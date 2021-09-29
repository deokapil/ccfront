import React from "react";
import { ErrorMessage, Field } from "formik";

const RadioButtons = (props) => {
  const { label, name, options, showHandler, ...rest } = props;
  return (
    <>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="form-check">
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    className="form-check-input"
                    disabled={!option.enabled}
                    onChange={async (e) => {
                      await field.onChange(e);
                      showHandler(option.value);
                    }}
                  />
                  <label htmlFor={option.value} className="form-check-label">
                    {option.key}
                  </label>
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

export default RadioButtons;
