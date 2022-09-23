import React, { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";

import "./signup.styles.scss";

function Signup() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName } = state;
  

  const resetState = () => {
    setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      alert("re-enter email or password");
      return;
    }
    try {
      const response = await createAuthUserWithEmailandPassword(
        state.email,
        state.password
      ); 

      await createUserDocumentFromAuth(response.user, { displayName });
      resetState();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        console.log("error message: ", error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>No account?</h2>
      <span>Use what you got...</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            onChange: handleChange,
            value: state.displayName,
            required: true,
          }}
        />

        <FormInput
          label="email"
          inputOptions={{
            type: "email",
            name: "email",
            value: state.email,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="password"
          inputOptions={{
            type: "password",
            name: "password",
            value: state.password,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="confirmPassword"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            value: state.confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />
        <Button 
          children={"SIGN UP"} 
          type="submit" 
        />
      </form>
    </div>
  );
}

export default Signup;
