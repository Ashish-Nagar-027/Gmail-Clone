import React, { useState } from "react";
import ComposeModal from "./ComposeModal";
import HalfScreenComposeModal from "./HalfScreenComposeModal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/counter/mailSlice";

const ComposeModalscontainer = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValue] = useState({
    Recipients: "",
    Subject: "",
    Message: "",
  });

  const formSubmittedFucntion = async (e) => {
    e.preventDefault();
    if (
      formValues.Recipients !== "" &&
      formValues.Subject !== "" &&
      formValues.Message !== ""
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

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
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
  );
};

export default ComposeModalscontainer;
