import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { connect } from "react-redux";
import { addFormData } from "../../redux/actions/formActions";

export class UserForm extends Component {
  // Proceed to next step
  nextStep = () => {
    const { step } = this.props.userInfo;
    this.props.inputChangedFx("step", step + 1);
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.props.userInfo;
    this.props.inputChangedFx("step", step - 1);
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    if (input === "userCv" || input === "userCoverLetter") {
      let file = e.target.files[0];
      let jsonFile = {
        name: file.name,
        lastModified: file.lastModified,
        size: file.size,
        type: file.type,
      };
      let jsonFileString = JSON.stringify(jsonFile);
      this.props.inputChangedFx(input, jsonFileString);
    } else {
      this.props.inputChangedFx(input, e.target.value);
    }
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      phoneNumber,
      isUSABased,
      gitProfile,
      bio,
    } = this.props.userInfo;
    const values = {
      firstName,
      lastName,
      email,
      phoneNumber,
      isUSABased,
      gitProfile,
      bio,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        console.log("This is a multi-step form");
    }
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangedFx: (input, value) => {
      dispatch(addFormData(input, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
