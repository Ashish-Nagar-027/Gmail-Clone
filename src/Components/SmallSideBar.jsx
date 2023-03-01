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

const SmallSidebarBox = styled(Box)({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  backgroundColor: "#F6F8FC",
  height: "100vh",
  fontWeight: "400",
  minWidth: "100px",
  color: "#444746",
  "& .ShowNow": {
    width: "fit-content",
  },
  transition: "all 0.2s ease-in-out",
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
  },
});

const SmallSideBar = () => {
  const dispatch = useDispatch();

  return (
    <SmallSidebarBox>
      <ComposeIcon
        className="ShowNow"
        variant="contained"
        bgcolor="#C2E7FF"
        onClick={() => dispatch(openSendMessage())}
      >
        <CreateOutlinedIcon />
      </ComposeIcon>

      <SideBarIcon IconType={InboxOutlinedIcon} />
      <SideBarIcon IconType={StarBorderOutlinedIcon} />
      <SideBarIcon IconType={WatchLaterOutlinedIcon} />
      <SideBarIcon IconType={SendOutlinedIcon} />
      <SideBarIcon IconType={DescriptionOutlinedIcon} />
      <SideBarIcon IconType={ExpandMoreOutlinedIcon} />
    </SmallSidebarBox>
  );
};

export default SmallSideBar;
