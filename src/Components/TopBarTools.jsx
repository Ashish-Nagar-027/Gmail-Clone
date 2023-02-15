import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Stack } from '@mui/system';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';




const TopBarTools = () => {
  return (
    <Box sx={{  display:'flex', alignItems:'center', justifyContent:'space-between', width:'calc(100vw - 300px)'}}>
       <Stack direction={'row'}>
        <IconButton sx={{transform:'scale(0.8)'}}>
          <CheckBoxOutlineBlankIcon />
        </IconButton>

        <IconButton sx={{transform:'scale(0.8)'}}>
          <ArrowDropDownIcon />
        </IconButton>

        <IconButton sx={{transform:'scale(0.8)'}}>
          <RefreshIcon />
        </IconButton>

        <IconButton sx={{transform:'scale(0.8)'}}>
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Stack direction={'row'}>
        <Button variant="text" sx={{color:'#818181'}}>1-50 of 2444</Button>
        <IconButton>
            <ArrowLeftIcon />
        </IconButton>
        <IconButton>
            <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default TopBarTools