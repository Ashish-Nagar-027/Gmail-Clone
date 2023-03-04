import { Box } from "@mui/material";
import React, { useState } from "react";
import MailBody from "./MailBody";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { allMailsAction, selectAllMails } from "../features/allMailSlice";

const AllEmailList = () => {
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  const allMailsdata = useSelector(selectAllMails);

  useEffect(() => {
    const q = query(collection(db, "data"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      setFetching(true);
      const setdata = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
        isStarred: false,
      }));

      setFetching(false);
      dispatch(allMailsAction(setdata));
    });
  }, []);

  return (
    <Box sx={{}}>
      {fetching ? (
        <h2 style={{ padding: "1rem" }}>loading . . .</h2>
      ) : (
        allMailsdata.map((mail) => <MailBody mail={mail} key={mail.id} />)
      )}
    </Box>
  );
};

export default AllEmailList;
