import {
  Box,
  Button,
  Input,
  InputAdornment,
  Modal,
  Typography, 
} from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";

// Add a second document with a generated ID.




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
  formRecipents ,
  setformRecipents,
  formSubject ,
  setformSubject,
  formMsg,
  setformMsg ,
  formSubmittedFucntion
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

       <form 
       onSubmit={(e) =>formSubmittedFucntion(e)}
       sx={{display:'flex', flexDirection:'column'}} 
       >
          <Input
          m={1} variant="standard"
            onFocus={(e) => setIsFocused(true)}
            onBlur={(e) => setIsFocused(false)}
            onChange={(e) => setformRecipents(e.target.value)}
            value={formRecipents}
            sx={style.inputs}
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
          />
     
          <Input
           m={1} variant="standard"
            placeholder="subject"
            sx={style.inputs}
            border="none"
            onChange={(e) => setformSubject(e.target.value)}
            value={formSubject}
            
          />

          <textarea
           onChange={(e) => setformMsg(e.target.value)}
           value={formMsg}
            style={{
              border: "none",
              outline: "none",
              maxWidth: "100%",
              minWidth:"90%",
              margin: "10px auto",
              backgroundColor: "whitesmoke",
              minHeight:'300px',
              padding: "5px 15px",
              
            }}
          ></textarea>
        <Button onClick={(e) => formSubmittedFucntion(e)} variant="contained" sx={{borderRadius:'20px', marginTop:'100px', marginLeft:'10px', display:'block'}}>Send</Button>
      </form>
      </Box>
    </Modal>
  );
};

export default ComposeModal;
