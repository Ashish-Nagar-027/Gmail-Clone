import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signout } from "../../features/counter/userSlice";
import { logoutModal } from "../../features/showLogOutSlice";

const LogOutProfileDetails = () => {
  const dispatch = useDispatch();

  const showLogOutModal = useSelector(logoutModal);

  const userInfo = useSelector(selectUser);

  function logOutFunction() {
    dispatch(signout());
  }

  return (
    <div
      style={{
        width: "fit-content",
        height: "200px",
        zIndex: "20",
        position: "fixed",
        right: "3rem",
        top: "5rem",
        background: "white",
        padding: "1rem",
        borderRadius: "20px",
        boxShadow: "1px 2px 2px 2px rgba(0, 0 , 0, 0.5)",
        display: showLogOutModal ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h2>{userInfo.displayName}</h2>
      <p>{userInfo.mail}</p>
      <Button variant="contained" onClick={logOutFunction}>
        LogOut
      </Button>
    </div>
  );
};

export default LogOutProfileDetails;
