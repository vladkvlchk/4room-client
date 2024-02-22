import React from "react";

type AuthPageType = {
  type: "signIn" | "signUp";
};

const Auth: React.FC<AuthPageType> = ({type}) => {
  return <div>{type}</div>;
};

export default Auth;
