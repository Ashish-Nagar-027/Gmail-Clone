import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, IconButton, InputBase, Tooltip } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch, useSelector } from "react-redux";
import { showlogout } from "../features/showLogOutSlice";
import { showfullSidebarAction } from "../features/sidebarSlice";
import { selectUser } from "../features/counter/userSlice";

const NavbarDiv = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "8px",
  background: "#F6F8FC",
  gap: "1rem",
});

const NavPart = styled(Box)({
  display: "flex",
  gap: "8px",
  flexGrow: 1,
  alignItems: "center",
});

const NavbarCenter = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  backgroundColor: "#EAF1FB",
  width: "35%",
  borderRadius: "10px",
  flexGrow: 2,
  position: "relative",
});

const SearchInput = styled(InputBase)({
  outline: "none",
  hover: "none",
  cursor: "default",
  padding: "8px 60px",
  "&.Mui-focused ": {
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
});

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  return (
    <>
      <NavbarDiv sx={{ position: "relative", marginLeft: "10px" }}>
        <NavPart>
          <Tooltip title="Main Menu">
            <IconButton onClick={() => dispatch(showfullSidebarAction())}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt="logo"
          />
        </NavPart>

        <NavbarCenter>
          <IconButton
            sx={{ position: "absolute", left: "10px", zIndex: "2" }}
            className="search-mail-icon"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            sx={{ position: "absolute", right: "10px", zIndex: "2" }}
            className="filter-mail-icon"
          >
            <TuneIcon />
          </IconButton>

          <SearchInput fullWidth placeholder="Search mail" />
        </NavbarCenter>

        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          className="header-right"
        >
          <Tooltip title="Support">
            <IconButton>
              <HelpIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Google Apps">
            <IconButton className="search-mail-icon">
              <AppsRoundedIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            className="search-mail-icon"
            onClick={() => dispatch(showlogout())}
          >
            <Avatar alt="Remy Sharp" src={userInfo.photoUrl} />
          </IconButton>
        </Box>
      </NavbarDiv>
    </>
  );
};

export default Header;
