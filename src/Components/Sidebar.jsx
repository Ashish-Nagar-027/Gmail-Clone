import { Icon, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import styled from "@emotion/styled";
import SideBarIcon from "./SideBarIcon";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/counter/mailSlice";
import { NavLink } from "react-router-dom";

const SidebarBox = styled(Box)({
  padding: "1rem 2rem 1rem 0rem",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  backgroundColor: "#F6F8FC",
  height: "100vh",
  fontWeight: "400",
  width: "250px",
  color: "#444746",
  "& .ShowNow": {
    width: "fit-content",
  },
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    width: "250px",
    "& .ShowNow": {
      width: "fit-content",
    },
  },
});

const ComposeIcon = styled(Icon)({
  padding: "1rem 1.2rem",
  backgroundColor: "#c2e7ff",
  borderRadius: "1rem",
  color: "#001d35",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  cursor: "pointer",
  margin: "10px 15px",
  ":hover": {
    backgroundColor: "#c2e7ff",
    boxShadow:
      "0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)",
    width: "140px",
  },
});

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <SidebarBox>
      <ComposeIcon
        className="ShowNow"
        variant="contained"
        bgcolor="#C2E7FF"
        onClick={() => dispatch(openSendMessage())}
      >
        <CreateOutlinedIcon />

        <Typography variant="p" fontWeight={500} fontSize={16}>
          Compose
        </Typography>
      </ComposeIcon>
      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to="/"
      >
        <SideBarIcon
          IconType={InboxOutlinedIcon}
          IconName={"Inbox"}
          InsideNumber={"30"}
        />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to="stared"
      >
        <SideBarIcon
          IconType={StarBorderOutlinedIcon}
          IconName={"Starred"}
          InsideNumber={"10"}
        />
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to="/snoozed"
      >
        <SideBarIcon
          IconType={WatchLaterOutlinedIcon}
          IconName={"Snoozed"}
          InsideNumber={"30"}
        />
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to="/sent"
      >
        <SideBarIcon
          IconType={SendOutlinedIcon}
          IconName={"Sent"}
          InsideNumber={"30"}
        />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to="/drafts"
      >
        <SideBarIcon
          IconType={DescriptionOutlinedIcon}
          IconName={"Drafts"}
          InsideNumber={"30"}
        />
      </NavLink>
      <SideBarIcon IconType={ExpandMoreOutlinedIcon} IconName={"More"} />
    </SidebarBox>
  );
};

export default Sidebar;
