import React from "react";
import { Row, Col, Button } from "react-bootstrap";

require("dotenv").config();

const Step3 = ({ consent }) => {
  const scritpTag = `http://api.consent.techtread.in/wp/${consent._id}.js`;
  return (
    <>
      <div className="step stp3 step-1 mb-4">
        <Row>
          <Col sm={10} md={7}>
            <div className="stepbox3">
              <code>
                &lt;!-- copy and insert this script at bottom of your html where
                you wish consent to be taken --&gt;
                <br />
                &lt;script src=&quot;{scritpTag}&quot;&gt;&lt;/script&gt;
              </code>
              <div>
                <code></code>
              </div>
              <p></p>
            </div>
            <div className="stepbox3btn">
              <Button className="btn btn-info">Copy Code</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="formFooter">
        <div className="container">
          <button type="button" className="btn btn-primary float-right">
            Done{" "}
          </button>
          <button type="button" className="btn btn-outline-primary float-right">
            Add More Domains
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;
