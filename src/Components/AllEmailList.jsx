import { Box } from "@mui/material";
import React, { useState } from "react";
import MailBody from "./MailBody";

import { collection,  onSnapshot,query } from "firebase/firestore"; 
import { useEffect } from "react";
import { db } from "../Firebase";



const AllEmailList = () => {

    
  const [fetching, setFetching] = useState(true)
  const [Mails, setMails] = useState([])

  useEffect(() =>{
   
      const q = query(collection(db,'data'));
      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
        setFetching(true)
       await setMails(querySnapshot.docs.map((doc) => ({
                      id : doc.id,
                      data: doc.data()
                     })))
        setFetching(false)

      });
    
  },[])



  return (
    <Box sx={{}}>

      <MailBody
        sender={"LinkedIn"}
        subject={"30+ new jobs for frontend developer "}
        msg={"SoftWare Engineering -Front end  Developer and other roles"}
      />
      <MailBody
        sender={"LinkedIn"}
        subject={"30+ new jobs for frontend developer "}
        msg={"SoftWare Engineering -Front end  Developer and other roles"}
      />
    

        {
         fetching ? "loading..." : Mails.map((mail) => {
            return  <MailBody
            key={mail.id}
            sender={mail.data.Recipents}
            subject={mail.data.Subject}
            msg={mail.data.Message}
          />
           })
          
        }
    
    </Box>
  );
};

export default AllEmailList;
