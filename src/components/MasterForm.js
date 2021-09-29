import React, { Component } from "react";
import { Form, Card } from "react-bootstrap";
// import { BrowserRouter as  Switch, Link  } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          type="button"
          className="btn btn-outline-primary float-left"
          onClick={this._prev}
        >
          <i class="fas fa-chevron-left"></i> Back
        </button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={this._next}
          >
            Next
          </button>
          <button type="button" className="btn btn-outline-primary float-right">
            Close
          </button>
          <button type="button" className="btn btn-light float-right">
            Skip Scan
          </button>
        </React.Fragment>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return (
        <React.Fragment>
          <div className="text-center">
            <button type="button" className="btn btn-light">
              Add more Domain
            </button>
            <button type="button" className="btn btn-primary">
              Done
            </button>
          </div>
        </React.Fragment>
      );
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <div className="MultistepForm container mt-5 pt-0">
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <Card.Title>Configure Cookie Consent</Card.Title>
              <Card.Body>
                <Card.Title>
                  <MultiStepProgressBar currentStep={this.state.currentStep} />
                </Card.Title>
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.password}
                />
              </Card.Body>
            </Card>
          </Form>
        </div>

        <div className="CardFooter">
          <div class="container">
            {this.previousButton}
            {this.nextButton}
            {this.submitButton}
          </div>
        </div>
      </>
    );
  }
}

export default MasterForm;
