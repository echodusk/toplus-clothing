import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom.button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";
import { userErrors } from "../../redux/user/user.selectors";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUp, error } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUp(email, password, displayName);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { error } = this.props;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up wit hyour email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
          />
          <FormInput
            required
            type="text"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
          />
          <FormInput
            required
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>

        { error ? <div style={{color: 'tomato', marginTop: '10px'}}>{error.message}</div> : null}
      </div>
    );
  }
}

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
