import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
// import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import styled from "@emotion/styled";

const FormControllsElement = styled(FormControl)({
  width: "90%",
  border: "none",
  padding: "5px",
});

const HalfScreenComposeModal = ({
  setHalfShowCompose,
  setShowCompose,
  isFocused,
  setIsFocused,
  ShowHalfCompose,
}) => {
  return (
    <Box
      sx={{
        display: ShowHalfCompose ? "block" : "none",
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
                setHalfShowCompose(false);
                setShowCompose(true);
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
              onClick={(e) => setHalfShowCompose(false)}
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

        <FormControllsElement m={1} variant="standard">
          <Input
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
            sx={{
              padding: "5px",
              border: "none",
              boxShadow: "inset 0 -1px 0 0 rgb(100 121 143 / 12%)",
              "&::before": { border: "none", "&:hover": { border: "none" } },
              "&::after": { border: "none", "&:hover": { border: "none" } },
              "&:hover": { border: "none" },
            }}
          />
        </FormControllsElement>
        <FormControllsElement m={1} variant="standard">
          <Input
            placeholder="subject"
            sx={{
              padding: "5px",
              border: "none",
              boxShadow: "inset 0 -1px 0 0 rgb(100 121 143 / 12%)",
              "&::before": { border: "none", "&:hover": { border: "none" } },
              "&::after": { border: "none", "&:hover": { border: "none" } },
              "&:hover": { border: "none" },
            }}
          />
        </FormControllsElement>
        <FormControllsElement m={1} variant="standard">
          <textarea
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              margin: "10px auto",
              minHeight: "300px",
            }}
          ></textarea>
        </FormControllsElement>
      </Box>
    </Box>
  );
};

export default HalfScreenComposeModal;
