import { Box } from "@mui/material";
import React, { useState } from "react";
import MailBody from "./MailBody";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../Firebase";

const AllEmailList = ({ setClickedMail, clickedMail }) => {
  const [fetching, setFetching] = useState(true);
  const [Mails, setMails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "data"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      setFetching(true);
      await setMails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setFetching(false);
    });
  }, []);

  return (
    <Box sx={{}}>
      {
        fetching
          ? "loading..."
          : Mails.map((mail) => (
              <MailBody
                mail={mail}
                key={mail.id}
                mailiId={mail.id}
                sender={mail.data.Recipents}
                subject={mail.data.Subject}
                msg={mail.data.Message}
                setClickedMail={setClickedMail}
                clickedMail={clickedMail}
              />
            ))
        //  date={new Date(mail.data.timestamp?.seconds * 1000).toLocaleTimeString()}
      }
    </Box>
  );
};

export default AllEmailList;
