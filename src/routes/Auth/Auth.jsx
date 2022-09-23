import React from "react";

import SignupForm from '../signup/Signup'
import SigninForm from "../signin/Signin";

import './auth.styles.scss'

function Auth() {
  
  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
}

export default Auth;

// const logGoogleUser = async () => {
//   const response = await signInWithGooglePopup();
//   const userDocRef = await createUserDocumentFromAuth(response.user);
// };