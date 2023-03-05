import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase";

import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

const DeleteMails = ({ mail }) => {
  const NavigateBack = useNavigate();
  async function DeleteMail(mail) {
    NavigateBack(-1);
    await deleteDoc(doc(db, "data", mail.id));
  }

  return (
    <IconButton onClick={() => DeleteMail(mail)}>
      <DeleteForeverIcon />
    </IconButton>
  );
};

export default DeleteMails;
