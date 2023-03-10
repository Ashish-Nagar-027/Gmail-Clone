import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useNavigate } from "react-router-dom";

import { clickedMailData } from "../features/clickedMailSlice";
import { useDispatch } from "react-redux";
import Star from "./Star";

const MailBody = ({ mail }) => {
  const dispatch = useDispatch();
  const NavigateToMail = useNavigate();

  function mailClickHandle(mail) {
    dispatch(clickedMailData(mail));
    NavigateToMail(`/${mail.id}`);
  }

  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "350px auto 150px",
        overflow: "hidden",
        alignItems: "center",
        height: "40px",
        "&:hover": {
          boxShadow:
            "0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)",
        },
      }}
      onClick={() => mailClickHandle(mail)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: "gray",
          overflow: "hidden",
          "&:hover": {
            color: "#444746",
          },
        }}
      >
        <Tooltip title="Select">
          <IconButton sx={{ transform: "scale(0.8)" }}>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Not Starred">
          <>
            <Star mail={mail} />
          </>
        </Tooltip>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            width: "65%",
            padding: "0px 5px 0px 0px",
            overflow: "hidden",
          }}
          color="#444746"
          component={"div"}
          fontSize={14}
          fontWeight={600}
        >
          <span>{mail.data.Recipents}</span>
        </Typography>
      </Box>

      <Box
        sx={{
          minWidth: "400px",
          maxWidth: "50vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          color="#444746"
          component={"div"}
          fontSize={14}
          fontWeight={600}
          sx={{
            display: "flex",
            whiteSpace: "nowrap",
            paddingRight: "10px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              paddingRight: "10px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {mail.data.Subject}
          </span>
          --{" "}
          <span style={{ fontSize: "12px", fontWeight: "400" }}>
            {mail.data.Message}
          </span>
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography fontSize={12}>
          {new Date(mail.data.timestamp?.seconds * 1000).toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default MailBody;
