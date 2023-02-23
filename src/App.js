import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import "./App.css";
import AllEmailList from "./Components/AllEmailList";
import ComposeModal from "./Components/ComposeModal";
import Header from "./Components/Header";

import Sidebar from "./Components/Sidebar";

import { useState } from "react";
import HalfScreenComposeModal from "./Components/HalfScreenComposeModal";
import { addDoc, collection,serverTimestamp   } from "firebase/firestore"; 
import MailDetails from "./Components/MailDetails";
import { db } from "./Firebase";
import { Route, Routes } from "react-router-dom";

function App() {

  const [clickedMail, setClickedMail] = useState(null)

  
  useEffect(() => {
    console.log(clickedMail)

  }, [clickedMail])
  
  
  const [isFocused, setIsFocused] = useState(false);
  const [ShowCompose, setShowCompose] = useState(false);
  const [ShowHalfCompose, setHalfShowCompose] = useState(false);
   
  const [formRecipents, setformRecipents ]  = useState("")
  const [formSubject, setformSubject ]  = useState("")
  const [formMsg, setformMsg ]  = useState("")


  const formSubmittedFucntion = async (e) => {
    e.preventDefault()

    setShowCompose(false)
    setHalfShowCompose(false)
    try {
      const docRef = await addDoc(collection(db, "data"), {
        Recipents: formRecipents,
        Subject: formSubject,
        Message: formMsg,
        timestamp: serverTimestamp()
      });
      
      setformMsg("")
      setformRecipents("")
      setformSubject("")
     
      alert('Email sent successfully')
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


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
          <Routes>
            <Route path='/' element={ <AllEmailList clickedMail={clickedMail} setClickedMail ={setClickedMail}/>} />
           { 
          clickedMail !== null ? <Route path={`/${clickedMail.id}`} element={<MailDetails clickedMail={clickedMail} />} /> : null
           }
          </Routes>
        
        </Stack>
      </Stack>
      <ComposeModal
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        setShowCompose={setShowCompose}
        ShowHalfCompose={ShowHalfCompose}
        setHalfShowCompose={setHalfShowCompose}
        ShowCompose={ShowCompose}
        formRecipents = { formRecipents }
        setformRecipents  = { setformRecipents }
        formSubject  = { formSubject }
        setformSubject = { setformSubject }
        formMsg = { formMsg }
        setformMsg  = { setformMsg }
        formSubmittedFucntion={formSubmittedFucntion}
      />
      <HalfScreenComposeModal
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        setShowCompose={setShowCompose}
        ShowCompose={ShowCompose}
        ShowHalfCompose={ShowHalfCompose}
        setHalfShowCompose={setHalfShowCompose}
        formRecipents = { formRecipents }
        setformRecipents  = { setformRecipents }
        formSubject  = { formSubject }
        setformSubject = { setformSubject }
        formMsg = { formMsg }
        setformMsg  = { setformMsg }
        formSubmittedFucntion={formSubmittedFucntion}
      />
    </div>
  );
}

export default App;
