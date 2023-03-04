import { Avatar, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectclickedMail } from "../features/clickedMailSlice";

const MailDetails = ({}) => {
  const clickedMail = useSelector(selectclickedMail);

  const NavigateBack = useNavigate();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "calc(100vw - 300px)",
          padding: "5px 10px",
        }}
      >
        <Stack direction={"row"} sx={{ gap: "1rem" }}>
          <Tooltip title="Back to Inbox">
            <IconButton onClick={() => NavigateBack(-1)}>
              <KeyboardBackspaceIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Archive">
            <IconButton>
              <ArchiveOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Report">
            <IconButton>
              <ReportGmailerrorredOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Mark as read">
            <IconButton>
              <MarkunreadOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Snoozed">
            <IconButton>
              <AccessTimeOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to task">
            <IconButton>
              <AddTaskOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Move">
            <IconButton>
              <DriveFileMoveOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Labels">
            <IconButton>
              <LabelOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction={"row"}>
          <Button variant="text" sx={{ color: "#818181" }}>
            1-50 of 2444
          </Button>
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
        </Stack>
      </Box>

      <Box>
        <Stack
          direction="raw"
          justifyContent={"space-between"}
          sx={{ padding: "20px 20px 20px 70px" }}
        >
          <Typography component={"h1"} variant="h4">
            {clickedMail.data.Subject}
          </Typography>
          <Stack direction="raw" gap="20px">
            <Tooltip title="Print">
              <IconButton onClick={() => window.print()}>
                <LocalPrintshopOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="In New tab">
              <IconButton>
                <LaunchOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", gap: "10px", justifyContent: "space-between" }}
        >
          <Avatar
            alt={clickedMail.data.Recipents}
            src="/static/images/avatar/3.jpg"
          />
          <Stack>
            <Typography component={"h6"} variant={"h6"}>
              {clickedMail.data.Recipents}
              <span
                style={{ fontSize: "13px", margin: "0px 5px" }}
              >{`<on${clickedMail.data.Recipents}>`}</span>
            </Typography>
            <span>to me</span>
          </Stack>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography
            fontSize={12}
            style={{
              display: "flex",
              gap: "10px",
              padding: "8px 15px",
              alignItems: "flex-start",
            }}
          >
            <span>
              {new Date(
                clickedMail.data.timestamp?.seconds * 1000
              ).toDateString()}
            </span>
            <span>
              {new Date(
                clickedMail.data.timestamp?.seconds * 1000
              ).toLocaleTimeString()}
            </span>

            <StarBorderOutlinedIcon cursor="pointer" />

            <MoreVertOutlinedIcon cursor="pointer" />
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography padding={"10px 70px"}>
          {clickedMail.data.Message}
        </Typography>
      </Box>
    </div>
  );
};

export default MailDetails;
