import React from "react";
import { Outlet } from "react-router-dom";
import SectionBar from "../Components/SectionBar";
import TopBarTools from "../Components/TopBarTools";

const InboxPage = () => {
  return (
    <>
      <TopBarTools />
      <SectionBar />
      <Outlet />
    </>
  );
};

export default InboxPage;
