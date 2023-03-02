import styled from "@emotion/styled";
import { Icon, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectshowfullSidebar } from "../features/sidebarSlice";

const SidebarItems = styled(Box)({
  display: "flex",
  gap: "15px",
});

const IconDiv = styled(Icon)({
  display: "flex",
  cursor: "pointer",
  gap: "10px",
  fontSize: "1.3rem",
  alignItems: "center",
  justifyContent: "center",
});

const SideBarIcon = ({ IconType, IconName, InsideNumber }) => {
  const showFullSidebar = useSelector(selectshowfullSidebar);

  return (
    <SidebarItems
      sx={{
        "&:hover": {
          borderRadius: showFullSidebar ? "2rem " : "",
          backgroundColor: showFullSidebar ? "#EAEBEF" : "",
        },
      }}
    >
      <IconDiv
        className="ShowNow"
        style={{
          padding: showFullSidebar ? "5px 10px 5px 25px" : "5px",
          margin: showFullSidebar ? "" : "5px 10px 5px 25px",
          "&:hover": {
            backgroundColor: showFullSidebar ? "#EAEBEF" : "",
          },
        }}
      >
        <IconButton>
          {<IconType sx={{ color: "#444746", transform: "scale(0.8)" }} />}
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            transition: "all 0.2s ease-in-out",
            width: showFullSidebar ? "160px" : "fit-content",
          }}
        >
          <Typography
            variant="p"
            sx={{
              display: IconName ? "flex" : "none",
            }}
            fontStyle={400}
            fontSize={14}
          >
            {IconName}
          </Typography>

          <Typography
            variant="p"
            sx={{
              display: IconName ? "flex" : "none",
            }}
            fontStyle={400}
            fontSize={14}
          >
            {InsideNumber}
          </Typography>
        </Box>
      </IconDiv>
    </SidebarItems>
  );
};

export default SideBarIcon;
