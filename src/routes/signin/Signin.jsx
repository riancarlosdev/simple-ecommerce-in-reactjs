import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailandPassword,
} from "../../utils/firebase.utils";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";

import "./signin.styles.scss";

function Signin() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const resetState = () => {
    setState({
      email: "",
      password: "",
    });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailandPassword(
        state.email,
        state.password
      );

      resetState();
      console.log("response :", response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password or email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Please tell me more...</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button children={"SIGN IN"} type="button" onClick={handleSubmit} />
          <Button
            children={"GOOGLE SIGN IN"}
            buttonType="google"
            type="button"
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
}

export default Signin;
