import { Stack } from "@mui/system";
import React from "react";
import "./App.css";
import AllEmailList from "./Components/AllEmailList";
import ComposeModal from "./Components/ComposeModal";
import Header from "./Components/Header";
import SectionBar from "./Components/SectionBar";
import Sidebar from "./Components/Sidebar";
import TopBarTools from "./Components/TopBarTools";
import { useState } from "react";
import HalfScreenComposeModal from "./Components/HalfScreenComposeModal";

function App() {
  
  const [isFocused, setIsFocused] = useState(false);
  const [ShowCompose, setShowCompose] = useState(false);
  const [ShowHalfCompose, setHalfShowCompose] = useState(false);

  return (
    <div className="App">
      <Header />
      <Stack
        direction={"row"}
        sx={{
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Sidebar
          setShowCompose={setShowCompose}
          setHalfShowCompose={setHalfShowCompose}
        />

        <Stack direction={"column"} sx={{}}>
          <TopBarTools />
          <SectionBar />
          <AllEmailList />
        </Stack>
      </Stack>
      <ComposeModal
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        setShowCompose={setShowCompose}
        ShowHalfCompose={ShowHalfCompose}
        setHalfShowCompose={setHalfShowCompose}
        ShowCompose={ShowCompose}
      />
      <HalfScreenComposeModal
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        setShowCompose={setShowCompose}
        ShowCompose={ShowCompose}
        ShowHalfCompose={ShowHalfCompose}
        setHalfShowCompose={setHalfShowCompose}
      />
    </div>
  );
}

export default App;
