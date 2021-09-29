import React, { useState } from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextField from "./common/TextField";
import RadioButtons from "./common/RadioButtons";
import RadioImageButtons from "./common/RadioImageButtons";
import TextArea from "./common/TextArea";

import BottomDefaulticon from "../assets/images/BottomDefault.svg";
import BottomLeft from "../assets/images/BottomLeft.svg";
import BottomRight from "../assets/images/BottomRight.svg";
import topimg from "../assets/images/topimg.svg";
import TopPushdown from "../assets/images/TopPushdown.svg";
import popup from "../assets/images/popup.svg";

import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import icon4 from "../assets/images/icon4.svg";
import icon5 from "../assets/images/icon5.svg";
import icon6 from "../assets/images/icon6.svg";
import icon7 from "../assets/images/icon7.svg";
import icon8 from "../assets/images/icon8.svg";
import icon9 from "../assets/images/icon9.svg";
import icon10 from "../assets/images/icon10.svg";
import icon11 from "../assets/images/icon11.svg";
import icon12 from "../assets/images/icon12.svg";
import icon13 from "../assets/images/icon13.svg";
import icon14 from "../assets/images/icon14.svg";
import icon15 from "../assets/images/icon15.svg";
import icon16 from "../assets/images/icon16.svg";

const Step2 = ({ navigation, consent, setDesign, setShowA }) => {
  const [isActive, setActive] = useState(true);
  const [show2, setShow2] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const cookiePolicyOptions = [
    {
      key: "Just tell users that we use cookies (No deny CTA- forcing user to accept)",
      value: "CTA-1",
      enabled: true,
    },
    {
      key: "Let users opt out of cookies (User can deny)",
      value: "CTA-2",
      enabled: true,
    },
    {
      key: "Ask users to opt into cookies (User can select cookies) Scan cookies for advanced setting",
      value: "CTA-3",
      enabled: false,
    },
  ];

  const complianceTypeOptions = [
    { key: "Bottom", value: "Bottom", img: BottomDefaulticon },
    { key: "Bottom-Left", value: "Bottom-Left", img: BottomLeft },
    { key: "Bottom-Right", value: "Bottom-Right", img: BottomRight },
    { key: "Top", value: "Top", img: topimg },
    { key: "Top-Pushdown", value: "Top-Pushdown", img: TopPushdown },
    { key: "Popup", value: "Popup", img: popup },
  ];

  // const layoutOptions = [
  //   { key: "Block", value: "Block" },
  //   { key: "Edgeless", value: "Edgeless" },
  //   { key: "Wire", value: "Wire" },
  //   { key: "Classic", value: "Classic" },
  // ];

  const validate = Yup.object({
    bannerPosition: Yup.string().required(
      "Banner Position is a required field!"
    ),
    policyLink: Yup.string().required("Policy Link required field!"),
    policyLinkText: Yup.string().required(
      "Policy Link Text is a required field!"
    ),
    bannerColor: Yup.string()
      .min(7, "Must be 6 digit Hexadecimal")
      .max(7, "Must be 6 digit Hexadecimal"),
    buttonColor: Yup.string()
      .min(7, "Must be 6 digit Hexadecimal")
      .max(7, "Must be 6 digit Hexadecimal"),
    bannerText: Yup.string()
      .min(7, "Must be 6 digit Hexadecimal")
      .max(7, "Must be 6 digit Hexadecimal"),
    buttonText: Yup.string()
      .min(7, "Must be 6 digit Hexadecimal")
      .max(7, "Must be 6 digit Hexadecimal"),
    refuseButtonColor: Yup.string()
      .min(7, "Must be 6 digit Hexadecimal")
      .max(7, "Must be 6 digit Hexadecimal"),
    refuseButtonText: Yup.string()
      .min(7, "Must be 6 digit Hexadecimal")
      .max(7, "Must be 6 digit Hexadecimal"),
  });

  async function submitHandler(values) {
    values["consentId"] = consent._id;
    const res = await fetch("http://api.consent.techtread.in/api/add-design", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }

    const cont = await res.json();
    setDesign(cont);

    const response = await fetch(
      "http://api.consent.techtread.in/api/create-js",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          consentId: consent._id,
        }),
      }
    );
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const fi = await response.json();
    console.log(fi);
    setShowA();
    navigation.next();
  }
  const show2Handler = (val) => {
    if (val === "CTA-2") {
      console.log(val);
      setShow2(true);
    } else {
      setShow2(false);
    }
  };

  return (
    <>
      <div className="step step-1 setep2 Site">
        <Formik
          initialValues={{
            cookiePolicy: "CTA-1",
            bannerPosition: "Bottom",
            policyLink: "",
            policyLinkText: "",
            layout: "",
            bannerColor: "",
            buttonColor: "",
            bannerText: "",
            buttonText: "",
            refuseButtonColor: "",
            refuseButtonText: "",
            disclaimer: "",
            dismissButtonText: "",
            acceptCookieButtonText: "",
            refuseCookieButtonText: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          {(formik) => (
            <Form>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    className={isActive ? "open" : null}
                    onClick={toggleClass}
                    eventKey="0"
                  >
                    <i className="fas fa-chevron-right"></i> Cookie Policy
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="titleStep">
                        Compliance type <span className="text-danger">*</span>
                      </div>
                      <RadioButtons
                        name="cookiePolicy"
                        options={cookiePolicyOptions}
                        label="Cookie Policy 1"
                        showHandler={show2Handler}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    className={isActive ? "open" : null}
                    onClick={toggleClass}
                    eventKey="1"
                  >
                    <i className="fas fa-chevron-right"></i> Design and Content
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className="titleStep"> Layout</div>
                      <Row>
                        <RadioImageButtons
                          name="bannerPosition"
                          options={complianceTypeOptions}
                          label="Layout"
                        />
                      </Row>
                      <Row>
                        <div className="col-12 col-md-4">
                          <div className="mb4 form-group">
                            <TextField
                              label="Policy Link"
                              name="policyLink"
                              type="text"
                              required={true}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-3">
                          <div className="mb4 form-group">
                            <TextField
                              label="Policy Link Text"
                              name="policyLinkText"
                              type="text"
                              required={true}
                            />
                          </div>
                        </div>
                      </Row>

                      <div className="titleStep">Palette</div>
                      <Row>
                        <Col md={7}>
                          <div className="d-flex flex-row flex-wrap my-flex-container">
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon1} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon2} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon3} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon4} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon5} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon6} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon7} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon8} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon9} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon10} alt="icon1" />
                              </button>
                            </div>

                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon11} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon12} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon13} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon14} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon15} alt="icon1" />
                              </button>
                            </div>
                            <div className="p-0 my-flex-item">
                              <button className="Compliancebtn">
                                <img src={icon16} alt="icon1" />
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <div className="titleStep mt-1"> Or</div>

                      <Row>
                        <div className="col-12 col-md-4">
                          <div className="mb4 form-group">
                            <TextField
                              label="# Banner Color"
                              name="bannerColor"
                              type="text"
                              required={true}
                              noLabel={true}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="mb4 form-group">
                            <TextField
                              label="# Banner Text"
                              name="bannerText"
                              type="text"
                              required={true}
                              noLabel={true}
                            />
                          </div>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-12 col-md-4">
                          <div className="mb4 form-group">
                            <TextField
                              label={
                                show2
                                  ? "# Accept Button Color"
                                  : "# Button Color"
                              }
                              name="buttonColor"
                              type="text"
                              required={true}
                              noLabel={true}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="mb4 form-group">
                            <TextField
                              label={
                                show2 ? "# Accept Button Text" : "# Button Text"
                              }
                              name="buttonText"
                              type="text"
                              required={true}
                              noLabel={true}
                            />
                          </div>
                        </div>
                      </Row>
                      {show2 && (
                        <Row>
                          <div className="col-12 col-md-4">
                            <div className="mb4 form-group">
                              <TextField
                                label="# Deny Button Color"
                                name="refuseButtonColor"
                                type="text"
                                required={true}
                                noLabel={true}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="mb4 form-group">
                              <TextField
                                label="# Deny Button Text"
                                name="refuseButtonText"
                                type="text"
                                required={true}
                                noLabel={true}
                              />
                            </div>
                          </div>
                        </Row>
                      )}
                      <Row>
                        <div className="col-12 col-md-5">
                          <div className="mb4 form-group">
                            <TextArea
                              label="Disclaimer"
                              name="disclaimer"
                              required={true}
                              rows="6"
                            />
                          </div>
                        </div>
                      </Row>
                      {show2 ? (
                        <Row>
                          <div className="col-12 col-md-4">
                            <div className="mb4 form-group">
                              <TextField
                                label="Accept Cookie Button Text"
                                name="acceptCookieButtonText"
                                type="text"
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="mb4 form-group">
                              <TextField
                                label="Refuse Cookie Button Text"
                                name="refuseCookieButtonText"
                                type="text"
                                required={true}
                              />
                            </div>
                          </div>
                        </Row>
                      ) : (
                        <Row>
                          <div className="col-12 col-md-4">
                            <div className="mb4 form-group">
                              <TextField
                                label="Dismiss Button Text"
                                name="dismissButtonText"
                                type="text"
                                required={true}
                              />
                            </div>
                          </div>
                        </Row>
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <div className="formFooter">
                <div className="container">
                  <button type="submit" className="btn btn-primary float-right">
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
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Step2;
