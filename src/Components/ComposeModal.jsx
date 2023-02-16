import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  Modal,
  Typography,
} from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";

const FormControllsElement = styled(FormControl)({
  width: "90%",
  border: "none",
  padding: "5px",
});

const ComposeModal = ({
  setShowCompose,
  ShowCompose,
  isFocused,
  setIsFocused,
  setHalfShowCompose,
}) => {
  //   const [isFocused, setIsFocused] = useState(false)

  return (
    <Modal
      open={ShowCompose}
      onClose={(e) => setShowCompose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          width: "80%",
          height: "85%",
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
            <CloseFullscreenIcon
              onClick={(e) => {
                setHalfShowCompose(true);
                setShowCompose(false);
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
              onClick={(e) => setShowCompose(false)}
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
              backgroundColor: "whitesmoke",
              minHeight: "300px",
            }}
          ></textarea>
        </FormControllsElement>
      </Box>
    </Modal>
  );
};

export default ComposeModal;
