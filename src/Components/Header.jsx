import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, IconButton, InputBase } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';


const NavbarDiv = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   padding:'8px',
   background:'#F6F8FC',
   gap:'1rem'
})

const NavPart = styled(Box)({
   display: 'flex',
   gap:'8px', 
   flexGrow: 1, 
   alignItems: 'center', 
})


const NavbarCenter = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-start',
   backgroundColor:'#EAF1FB', 
   width:"35%",
   borderRadius:'10px', 
   flexGrow: 2, 
   position:'relative'
})

const SearchInput = styled(InputBase)({
   outline:'none', 
   hover:'none',
   cursor:'default',
   padding:'8px 60px', 
   "&.Mui-focused ":{ 
   borderRadius:'10px',
   backgroundColor:"white",
   boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
   }
})



const Header = () => {

   return (
      <NavbarDiv>
         <NavPart >
            <IconButton >
               <MenuIcon/>
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="logo" />
         </NavPart>

         <NavbarCenter>
               <IconButton sx={{position:'absolute', left:'10px', zIndex:'2'}} className='search-mail-icon'>
                  <SearchIcon />
               </IconButton>
               <IconButton sx={{position:'absolute', right:'10px', zIndex:'2'}} className='filter-mail-icon' >
                  <TuneIcon />
               </IconButton>
               <SearchInput fullWidth placeholder='Search mail'  />
         </NavbarCenter>

         <Box sx={{ display:'flex', flexGrow:1, justifyContent:'flex-end',}} className='header-right' >
            <IconButton >
               <HelpIcon />
            </IconButton>
            <IconButton >
               <SettingsIcon />
            </IconButton>
            <IconButton className='search-mail-icon'>
               <AppsRoundedIcon />
            </IconButton>
            <IconButton className='search-mail-icon'>
            <Avatar alt="Remy Sharp" src="https://ashish-nagar.netlify.app/images/Ashish.jpg" />
            </IconButton>
         </Box>
      </NavbarDiv>
   )
}

export default Header