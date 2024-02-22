import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import googleLogo from "../assets/google_logo.svg";

type AuthPageType = {
  type: "signIn" | "signUp";
};

const Auth: React.FC<AuthPageType> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSignIn = (event) => {
    event.preventDefault();
  };

  const onSignUp = (event) => {
    event.preventDefault();
  };

  // SIGN IN FORM
  if (type === "signIn") {
    return (
      <div className="bg-color1 min-h-screen flex items-center justify-center">
        <div>
          <h1 className="font-roboto text-3xl text-center m-4 font-bold">
            Sign In
          </h1>
          <form
            onSubmit={onSignIn}
            className="border bg-white p-10 rounded-3xl drop-shadow-lg flex flex-col min-w-96"
          >
            <input
              className="bg-color1 text-md p-3.5 border-2 rounded-lg font-inter m-2"
              type="email"
              name="email"
              placeholder="bob@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="bg-color1 text-md p-3.5 border-2 rounded-lg font-inter m-2"
              type="password"
              name="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" disabled={!(email && password.length > 7)}>
              Submit
            </Button>
            <div className="flex justify-center items-center text-color3">
              <div className="border-b-color3 w-10 border-b flex-1 mx-2"></div>
              <p>or</p>
              <div className="border-b-color3 w-10 border-b flex-1 mx-2"></div>
            </div>
            <button
              className={
                "bg-color1 p-3.5 border-2 rounded-lg font-inter m-2 flex justify-center text-color2"
              }
            >
              <img src={googleLogo} alt="Google logo" />
              <p className="ml-2">Contionue with Google</p>
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="text-blue-500 underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }

  //   SIGN UP FORM
  return (
    <div className="bg-color1 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="font-roboto text-3xl text-center m-4 font-bold">
          Sign Up
        </h1>
        <form
          onSubmit={onSignUp}
          className="border bg-white p-10 rounded-3xl drop-shadow-lg flex flex-col min-w-96"
        >
          <input
            className="bg-color1 text-md p-3.5 border-2 rounded-lg font-inter m-2"
            placeholder="Patrick Star "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="bg-color1 text-md p-3.5 border-2 rounded-lg font-inter m-2"
            type="email"
            placeholder="patrick@star.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="bg-color1 text-md p-3.5 border-2 rounded-lg font-inter m-2"
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={!(email && password.length > 7 && name)}>
            Submit
          </Button>
          <div className="flex justify-center items-center text-color3">
            <div className="border-b-color3 w-10 border-b flex-1 mx-2"></div>
            <p>or</p>
            <div className="border-b-color3 w-10 border-b flex-1 mx-2"></div>
          </div>
          <button
            className={
              "bg-color1 p-3.5 border-2 rounded-lg font-inter m-2 flex justify-center text-color2"
            }
          >
            <img src={googleLogo} alt="Google logo" />
            <p className="ml-2">Contionue with Google</p>
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/sign-in"} className="text-blue-500 underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
