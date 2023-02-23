import { Avatar, Button, Icon, IconButton, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';



import { useNavigate } from 'react-router-dom';

const MailDetails = ({clickedMail}) => {

  const NavigateBack = useNavigate()


  return (
    <div>

<Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "calc(100vw - 300px)",
        padding:'5px 10px'
      }}
    >
      <Stack direction={"row"} gap={2} >
      <Tooltip title="Back to Inbox">
        <IconButton  onClick={()=> NavigateBack(-1)}>
          <KeyboardBackspaceIcon fontSize="small" />
        </IconButton>
        </Tooltip>

        

        <IconButton >
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton >
          <ReportGmailerrorredOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton >
          <MarkunreadOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton >
          <AccessTimeOutlinedIcon fontSize="small"/>
        </IconButton>

        <IconButton >
          <AddTaskOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton >
          <DriveFileMoveOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton >
          <DeleteForeverIcon fontSize="small"/>
        </IconButton>

        <IconButton>
          <LabelOutlinedIcon fontSize="small"/>
        </IconButton>

        <IconButton >
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>

      </Stack>
      <Stack direction={"row"}>
        <Button variant="text" sx={{ color: "#818181" }}>
          1-50 of 2444
        </Button>
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Box>

    <Box>
    <Stack direction='raw' justifyContent={'space-between'} sx={{padding:'20px 20px 20px 70px'}}>
         <Typography component={'h1'} variant='h4'> {clickedMail.data.Subject}</Typography>
         <Stack direction='raw' gap='20px' >
          <IconButton>
            <LocalPrintshopOutlinedIcon />
          </IconButton>
          <IconButton>
            <LaunchOutlinedIcon />
          </IconButton>
         </Stack>
      </Stack>
    </Box>
         

    <Box sx={{padding:'10px',display:'flex',justifyContent:'space-between'}}>
      <Box sx={{display:'flex',gap:'10px',justifyContent:'space-between'}}>
      <Avatar alt={clickedMail.data.Recipents} src="/static/images/avatar/3.jpg" />
       <Stack >
        <Typography component={'h6'} variant={'h6'}>{clickedMail.data.Recipents}<span style={{fontSize:'13px',margin:'0px 5px'}}>{`<on${clickedMail.data.Recipents}>`}</span></Typography>
        <span>to me</span>
        </Stack>
      </Box>
      
      <Box sx={{display:'flex', }}>
        <Typography fontSize={12} style={{display:'flex',gap:'10px',padding:'8px 15px',alignItems:'flex-start'}}>
          <span> {new Date(clickedMail.data.timestamp?.seconds * 1000).toDateString()} </span>
          <span> {new Date(clickedMail.data.timestamp?.seconds * 1000).toLocaleTimeString()} </span>
       
            <StarBorderOutlinedIcon cursor="pointer"/> 
       
            <MoreVertOutlinedIcon cursor="pointer" /> 
        
        </Typography>
               
      </Box>
      </Box>
      <Box>
        <Typography padding={'10px 70px'}>
      {clickedMail.data.Message}
        </Typography>
    </Box>
    </div>
  )
}

export default MailDetails