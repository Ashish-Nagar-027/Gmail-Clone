import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import "./App.css";
import AllEmailList from "./Components/AllEmailList";
import ComposeModal from "./Components/ComposeModal";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import HalfScreenComposeModal from "./Components/HalfScreenComposeModal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import MailDetails from "./Components/MailDetails";
import { db } from "./Firebase";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Promotion from "./pages/Promotion";
import Socials from "./pages/Socials";
import InboxPage from "./pages/InboxPage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import LogOutProfileDetails from "./pages/authentication/LogOutProfileDetails";
import SmallSideBar from "./Components/SmallSideBar";
import { selectshowfullSidebar } from "./features/sidebarSlice";
import { closeSendMessage } from "./features/counter/mailSlice";

function App() {
  const dispatch = useDispatch();

  const [clickedMail, setClickedMail] = useState(null);

  useEffect(() => {
    console.log(clickedMail);
  }, [clickedMail]);

  const [formValues, setFormValue] = useState({
    Recipients: "",
    Subject: "",
    Message: "",
  });

  const [isFocused, setIsFocused] = useState(false);

  const formSubmittedFucntion = async (e) => {
    e.preventDefault();
    if (
      formValues.Recipients != "" &&
      formValues.Subject != "" &&
      formValues.Message != ""
    ) {
      try {
        dispatch(closeSendMessage());
        const docRef = await addDoc(collection(db, "data"), {
          Recipents: formValues.Recipients,
          Subject: formValues.Subject,
          Message: formValues.Message,
          timestamp: serverTimestamp(),
        });

        setFormValue({
          Recipients: "",
          Subject: "",
          Message: "",
        });
        alert("Email sent successfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("please fill inputs");
    }
  };

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
                {clickedMail !== null ? (
                  <Route
                    path={`/${clickedMail.id}`}
                    element={<MailDetails clickedMail={clickedMail} />}
                  />
                ) : null}
              </Routes>
            </Stack>
          </Stack>
          <ComposeModal
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            setFormValue={setFormValue}
            formValues={formValues}
            formSubmittedFucntion={formSubmittedFucntion}
          />
          <HalfScreenComposeModal
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            setFormValue={setFormValue}
            formValues={formValues}
            formSubmittedFucntion={formSubmittedFucntion}
          />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
