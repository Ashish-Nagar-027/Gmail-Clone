import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";

import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useDispatch, useSelector } from "react-redux";

import {
  closeSendMessage,
  openFullComposeModal,
  selectOpenHalfCompose,
} from "../features/counter/mailSlice";

const HalfScreenComposeModal = ({
  isFocused,
  setIsFocused,
  formValues,
  setFormValue,
  formSubmittedFucntion,
}) => {
  const showHalfComposeModal = useSelector(selectOpenHalfCompose);

  const dispatch = useDispatch();

  const handleFormValues = (e) => {
    setFormValue({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        display: showHalfComposeModal ? "block" : "none",
        position: "fixed",
        right: "2rem",
        bottom: "1rem",
        minHight: "300px",
        width: "450px",
        borderRadius: "10px 10px 0px 0px",
        boxShadow:
          "0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
            backgroundColor: "#EAF1FB",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <Typography
            color="#041e49"
            component={"div"}
            variant={"div"}
            fontSize={14}
          >
            New message
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MinimizeIcon
              sx={{
                transform: "scale(0.7)",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(68,71,70,0.078)",
                  opacity: "1",
                },
              }}
            />
            <OpenInFullIcon
              onClick={(e) => {
                dispatch(openFullComposeModal());
              }}
              sx={{
                transform: "scale(0.7)",
                cursor: "pointer",

                "&:hover": {
                  backgroundColor: "rgba(68,71,70,0.078)",
                  opacity: "1",
                },
              }}
            />
            <CloseIcon
              onClick={() => dispatch(closeSendMessage())}
              sx={{
                transform: "scale(0.7)",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(68,71,70,0.078)",
                  opacity: "1",
                },
              }}
            />
          </Box>
        </Box>

        <form onSubmit={(e) => formSubmittedFucntion(e)}>
          <Input
            required
            name="Recipients"
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                {isFocused ? "To" : "Recipients"}
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                {isFocused && "CC Bcc"}
              </InputAdornment>
            }
            onFocus={(e) => setIsFocused(true)}
            onBlur={(e) => setIsFocused(false)}
            onChange={handleFormValues}
            value={formValues.Recipients}
            sx={{
              border: "none",
              boxShadow: "inset 0 -1px 0 0 rgb(100 121 143 / 12%)",
              "&::before": { border: "none", "&:hover": { border: "none" } },
              "&::after": { border: "none", "&:hover": { border: "none" } },
              "&:hover": { border: "none" },
              width: "100%",
              padding: "10px",
            }}
          />

          <Input
            name="Subject"
            placeholder="subject"
            onChange={handleFormValues}
            value={formValues.Subject}
            sx={{
              padding: "5px 10px",
              border: "none",
              boxShadow: "inset 0 -1px 0 0 rgb(100 121 143 / 12%)",
              "&::before": { border: "none", "&:hover": { border: "none" } },
              "&::after": { border: "none", "&:hover": { border: "none" } },
              "&:hover": { border: "none" },
              width: "100%",
            }}
            required
          />

          <textarea
            name="Message"
            onChange={handleFormValues}
            value={formValues.Message}
            style={{
              border: "none",
              outline: "none",

              margin: "10px auto",
              minHeight: "300px",
              width: "100%",
              padding: "5px 10px ",
            }}
            required
          ></textarea>

          <Button
            onClick={(e) => formSubmittedFucntion(e)}
            variant="contained"
            sx={{
              borderRadius: "20px",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default HalfScreenComposeModal;
