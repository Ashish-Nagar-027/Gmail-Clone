import { Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MailBody from "../Components/MailBody";
import { selectAllMails } from "../features/allMailSlice";
import "./InboxPage";
import TopBarTools from "../Components/TopBarTools";
const Stared = () => {
  const allMailsdata = useSelector(selectAllMails);

  const maildata = allMailsdata?.filter((mail) => mail.data.isStarred);

  return (
    <Box>
      <div style={{ padding: "1rem", borderBottom: "1px solid" }}>
        <TopBarTools />
      </div>
      {maildata && maildata.length > 0 ? (
        maildata.map((mail) => <MailBody mail={mail} key={mail.id} />)
      ) : (
        <div className="inbox-sections-div">
          <h2>No starred Mails (Empty Right Now)</h2>
        </div>
      )}
    </Box>
  );
};

export default Stared;
