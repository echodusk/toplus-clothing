import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom.button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";
import { userErrors } from "../../redux/user/user.selectors";

const SignUp = ({ signUp, error }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUp(email, password, displayName);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up wit hyour email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="text"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>

      {error ? (
        <div style={{ color: "tomato", marginTop: "10px" }}>
          {error.message}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: userErrors(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password, displayName) =>
      dispatch(signUpStart({ email, password, displayName }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
