import { Button } from "@mui/material";
import React from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signin } from "../../features/counter/userSlice";
import { Google } from "@mui/icons-material";

// import { Provider } from "react-redux";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();

  const loginFunction = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          signin({
            displayName: user.displayName,
            mail: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
        alt="gmail-img"
      ></img>
      <h1>WelCome to Gmail Clone</h1>
      <span>just fun project By Ashish Nagar</span>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.2rem",
        }}
        onClick={() => loginFunction()}
      >
        <Google /> <span>Sing up</span>
      </Button>
    </div>
  );
};

export default Login;
