import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "./common/TextField";
import TmpField1 from "./common/TmpField1";
import TmpField2 from "./common/TmpField2";
import TmpField3 from "./common/TmpField3";
import * as Yup from "yup";

const Step1 = ({ navigation, setConsent, setShowA }) => {
  Yup.addMethod(Yup.mixed, "subStr", function (ref, message) {
    const msg = message || `Should be subdomain of ${ref.path}`;
    return this.test("subStr", msg, function (value) {
      let refValue = this.resolve(ref);
      return !refValue || !value || value.includes(refValue);
    });
  });

  const validate = Yup.object({
    domainGroup: Yup.string().required("Company Name is a required field!"),
    domain: Yup.string().subStr(
      Yup.ref("domainGroup"),
      "Domain must be sub domain of Domain Group"
    ),
    primaryOwner: Yup.string()
      .email("Email is invalid")
      .required("Primary Owner is a required field!"),
  });

  async function submitHandler(values) {
    const res = await fetch(
      "http://api.consent.techtread.in/api/create-consent",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }

    const cont = await res.json();
    console.log(cont);
    setConsent(cont);
    navigation.next();
  }

  return (
    <>
      <div className="step step-1 stp1 stepRs">
        <Formik
          initialValues={{
            domainGroup: "",
            domain: "",
            primaryOwner: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          {(formik) => (
            <Form>
              <>
                <div className="mb-3 row">
                  <div className="col-12 col-md-5">
                    <div className="mb4 form-group">
                      <TextField
                        label="Domain Group"
                        name="domainGroup"
                        type="text"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="mb4 form-group">
                      <TextField
                        label="Domain"
                        name="domain"
                        type="text"
                        required={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-12 col-md-5">
                    <TmpField2 />
                  </div>
                  <div className="col-12 col-md-5">
                    <TmpField3 />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-12 col-md-5">
                    <div className="mb4 boxr form-group">
                      <TextField
                        label="Primary Owner"
                        name="primaryOwner"
                        type="text"
                        required={true}
                      />

                      <Link to="#" className="bolll">
                        <i className="fas fa-plus"></i> Co-owner
                      </Link>
                    </div>
                    <TmpField1 />
                  </div>
                </div>
                <div className="formFooter">
                  <div className="container">
                    <button
                      type="button"
                      className="btn btn-primary float-left"
                      disabled={true}
                    >
                      Scan For Cookies
                    </button>
                    <button
                      type="button"
                      className="btn btn-light float-left"
                      disabled={true}
                    >
                      Skip Scan
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary float-right"
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary float-right"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Step1;
