import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


const MailBody = ({sender, subject, msg}) => {
  return (
   <Box sx={{
    cursor:'pointer',
    display: 'grid',
    gridTemplateColumns:'300px auto 150px',
    boxShadow: 'inset 0 -1px 0 0 rgb(100 121 143 / 12%)',
    overflow:'hidden',
    '&:hover':{
        boxShadow: '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
         }

   }}>

    <Box sx={{
    display: 'flex',
    alignItems:'center',
    cursor:'pointer' ,
    color:'gray' ,
    '&:hover':{
        color:'#444746', 
         }}}>
        <IconButton sx={{transform:'scale(0.8)'}}>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton sx={{transform:'scale(0.8)'}}>
          <StarBorderOutlinedIcon />
        </IconButton>
        <Typography color='#444746' component={'span'} fontSize={14} fontWeight={600}>
            {sender}
        </Typography>
    </Box>

         <Box sx={{display:'flex', alignItems:'center', overflow:'hidden'}}>
         <Typography color='#444746' component={'span'} fontSize={14} fontWeight={600} sx={{display:'flex', alignItems:'center',paddingRight:'10px'}}>
            {subject}
            <Typography fontSize={13}>
                   -- {msg}...
            </Typography>
        </Typography>
         </Box>
         
         <Box sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
         <Typography fontSize={12}>
                Feb 14
            </Typography>
         </Box>
    </Box>

  )
}

export default MailBody