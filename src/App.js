import { Stack } from "@mui/system";
import React from "react";
import "./App.css";
import AllEmailList from "./Components/AllEmailList";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

import MailDetails from "./Components/MailDetails";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Promotion from "./pages/Promotion";
import Socials from "./pages/Socials";
import InboxPage from "./pages/InboxPage";

import { selectUser } from "./features/counter/userSlice";
import LogOutProfileDetails from "./pages/authentication/LogOutProfileDetails";
import SmallSideBar from "./Components/SmallSideBar";
import { selectshowfullSidebar } from "./features/sidebarSlice";

import ComposeModalscontainer from "./Components/ComposeModalscontainer";
import { useSelector } from "react-redux";
import Stared from "./pages/Stared";
import Sent from "./pages/Sent";
import Snoozed from "./pages/Snoozed";
import Drafts from "./pages/Drafts";

function App() {
  const [clickedMail, setClickedMail] = useState(null);

  const user = useSelector(selectUser);

  const showFullSidebar = useSelector(selectshowfullSidebar);

  return (
    <>
      {user ? (
        <div className="App" style={{ position: "relative" }}>
          <Header />
          <LogOutProfileDetails />
          <Stack
            direction={"row"}
            sx={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            {showFullSidebar ? <Sidebar /> : <SmallSideBar />}

            <Stack direction={"column"} sx={{}}>
              <Routes>
                <Route path="/" element={<InboxPage />}>
                  <Route
                    index
                    element={
                      <AllEmailList
                        clickedMail={clickedMail}
                        setClickedMail={setClickedMail}
                      />
                    }
                  />
                  <Route path="promotions" element={<Promotion />} />
                  <Route path="socials" element={<Socials />} />
                </Route>
                <Route path="stared" element={<Stared />} />
                <Route path="Sent" element={<Sent />} />
                <Route path="snoozed" element={<Snoozed />} />
                <Route path="Drafts" element={<Drafts />} />
                {clickedMail !== null ? (
                  <Route
                    path={`/${clickedMail.id}`}
                    element={<MailDetails clickedMail={clickedMail} />}
                  />
                ) : null}
              </Routes>
            </Stack>
          </Stack>
          <ComposeModalscontainer />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
