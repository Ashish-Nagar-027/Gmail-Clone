import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const BoxItem = styled(Box)({
  padding: "15px 10px",
  display: "flex",
  gap: "15px",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    color: "#1565C0",
    backgroundColor: "#F4F4F4",
  },
});

const SectionBar = () => {
  const [activeBox, setActiveBox] = useState("Primary");

  function setActiveBoxFunction(e) {
    if (e.target.classList.contains("Promotions")) {
      setActiveBox("Promotions");
    }

    if (e.target.classList.contains("Socials")) {
      setActiveBox("Socials");
    }

    if (e.target.classList.contains("Primary")) {
      setActiveBox("Primary");
    }
  }

  return (
    <Box sx={{ display: "flex", fontSize: "0.8rem" }}>
      <BoxItem
        sx={{
          width: "250px",
          borderBottom:
            activeBox === "Primary" ? "3px solid #1565C0 " : "3px solid white",
          color: activeBox === "Primary" ? "#1565C0 " : "#444746",
        }}
        onClick={(e) => setActiveBoxFunction(e)}
        className="Primary"
      >
        <InboxIcon sx={{ transform: "scale(0.8)" }} className="Primary" />
        <Typography fontSize={15} className="Primary">
          Primary
        </Typography>
      </BoxItem>

      <BoxItem
        onClick={(e) => setActiveBoxFunction(e)}
        sx={{
          width: "250px",
          borderBottom:
            activeBox === "Promotions"
              ? "3px solid #1565C0 "
              : "3px solid white",
          color: activeBox === "Promotions" ? "#1565C0 " : "#444746",
        }}
        className="Promotions"
      >
        <LocalOfferOutlinedIcon
          sx={{ transform: "scale(0.8)" }}
          className="Promotions"
        />
        <Typography fontSize={15} className="Promotions">
          Promotions
        </Typography>
      </BoxItem>

      <BoxItem
        onClick={(e) => setActiveBoxFunction(e)}
        sx={{
          width: "250px",
          borderBottom:
            activeBox === "Socials" ? "3px solid #1565C0 " : "3px solid white",
          color: activeBox === "Socials" ? "#1565C0 " : "#444746",
        }}
        className="Socials"
      >
        <GroupOutlinedIcon
          sx={{ transform: "scale(0.8)" }}
          className="Socials"
        />
        <Typography fontSize={15} className="Socials">
          Socials
        </Typography>
      </BoxItem>
    </Box>
  );
};

export default SectionBar;
