import React, { useState } from "react";
import { useStep } from "react-hooks-helper";
import { Card } from "react-bootstrap";
import { Toast } from "react-bootstrap";
import MultiStepProgressBar from "./MultiStepProgressBar";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const steps = [{ id: "domain" }, { id: "design" }, { id: "final" }];

const ConsentConfigurationForm = () => {
  const { step, index, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const [consent, setConsent] = useState({});
  const [design, setDesign] = useState({});
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const props = {
    navigation,
    consent,
    design,
    setConsent,
    setDesign,
    setShowA,
  };

  let comp = null;
  switch (step.id) {
    case "design":
      comp = <Step2 {...props} />;
      break;
    case "final":
      comp = <Step3 {...props} />;
      break;
    default:
      comp = <Step1 {...props} />;
  }
  return (
    <>
      <div className="MultistepForm container mt-5 pt-0">
        <div className="stepToast">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <i class="fas fa-check-circle"></i>
              <div className="toastb">
                <h6>Success</h6>
                Domain <strong>{consent.domain}</strong> successfully
                configured.
              </div>
            </Toast.Header>
          </Toast>
        </div>
        <Card>
          <Card.Title>Configure Cookie Consent</Card.Title>
          <Card.Body>
            <Card.Title>
              <MultiStepProgressBar currentStep={index + 1} />
            </Card.Title>
            {comp}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ConsentConfigurationForm;
