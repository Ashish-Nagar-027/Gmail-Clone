import styled from "@emotion/styled";
import { Icon, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

const SidebarItems = styled(Box)({
  display: "flex",
  gap: "15px",
  "&:hover": {
    width: "220px",
    "& .ShowNow": {
      width: "200px",
    },
  },
});

const IconDiv = styled(Icon)({
  display: "flex",
  cursor: "pointer",
  gap: "10px",
  fontSize: "1.3rem",
  padding: "5px 10px 5px 25px",
  "&:hover": {
    backgroundColor: "#EAEBEF",
    borderRadius: "0px 20px 20px 0",
  },
});

const SideBarIcon = ({ IconType, IconName, InsideNumber }) => {
  return (
    <SidebarItems>
      <IconDiv className="ShowNow">
        {<IconType sx={{ color: "#444746", transform: "scale(0.8)" }} />}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            transition: "all 0.2s ease-in-out",
            width: "160px",
          }}
        >
          <Typography variant="p" fontStyle={400} fontSize={14}>
            {IconName}
          </Typography>

          <Typography variant="p" fontStyle={400} fontSize={14}>
            {InsideNumber}
          </Typography>
        </Box>
      </IconDiv>
    </SidebarItems>
  );
};

export default SideBarIcon;
