import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { db } from "../Firebase";
import { doc, updateDoc } from "firebase/firestore";
import { IconButton } from "@mui/material";

const Star = ({ mail }) => {
  async function addStarred(event, mail) {
    event.stopPropagation();

    setRenderState(!renderState);
    const mailId = mail.id;
    const updateStar = doc(db, "data", mailId);
    await updateDoc(updateStar, {
      isStarred: !mail.data.isStarred,
    });
  }

  const [renderState, setRenderState] = useState(!mail.data.isStarred);

  return (
    <IconButton
      sx={{ transform: "scale(0.8)" }}
      onClick={(event) => addStarred(event, mail)}
      color={"yellow"}
    >
      {renderState ? (
        <StarIcon style={{ color: "#F4B400" }} />
      ) : (
        <StarBorderOutlinedIcon />
      )}
    </IconButton>
  );
};

export default Star;
