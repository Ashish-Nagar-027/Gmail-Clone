import {
  Box,
  Button,
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


const style = {
  styleForIcons :  {
      transform: "scale(0.7)",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "rgba(68,71,70,0.078)",
        opacity: "1",
      },
    },

    inputs: {
        padding: "5px 15px",
        border: "none",
        boxShadow: "inset 0 -1px 0 0 rgb(100 121 143 / 12%)",
        "&::before": { border: "none", "&:hover": { border: "none" } },
        "&::after": { border: "none", "&:hover": { border: "none" } },
        "&:hover": { border: "none" },
        width:'100%',
        outline:'none'
      }
}


const ComposeModal = ({
  setShowCompose,
  ShowCompose,
  isFocused,
  setIsFocused,
  setHalfShowCompose,
}) => {
  

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
               sx={style.styleForIcons}
            />
            <CloseFullscreenIcon
              onClick={(e) => {
                setHalfShowCompose(true);
                setShowCompose(false);
              }}
              sx={style.styleForIcons}
            />
            <CloseIcon
              onClick={(e) => setShowCompose(false)}
              sx={style.styleForIcons}
            />
          </Box>
        </Box>

       <form sx={{display:'flex', flexDirection:'column'}}>
          <Input
           m={1} variant="standard"
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
            sx={style.inputs}
          />
     
          <Input
           m={1} variant="standard"
            placeholder="subject"
            sx={style.inputs}
            border="none"
          />

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
        <Button variant="contained" sx={{ display:'block',borderRadius:'20px', marginBottom:'10px', marginLeft:'10px'}}>Send</Button>
      </form>
      </Box>
    </Modal>
  );
};

export default ComposeModal;
