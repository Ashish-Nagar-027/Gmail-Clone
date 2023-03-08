import React from "react";
import { Outlet } from "react-router-dom";
import SectionBar from "../Components/SectionBar";
import TopBarTools from "../Components/TopBarTools";

const InboxPage = () => {
  return (
    <div style={{ minWidth: "100%" }}>
      <TopBarTools />
      <SectionBar />
      <Outlet />
    </div>
  );
};

export default InboxPage;
