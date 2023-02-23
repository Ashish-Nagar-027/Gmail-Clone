import { Icon,  Typography } from '@mui/material'
import { Box } from '@mui/material';
import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import styled from '@emotion/styled';
import SideBarIcon from './SideBarIcon';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/counter/mailSlice';


const SidebarBox = styled(Box)({
    display:'flex',
    position:'relative',
    flexDirection:'column',
    backgroundColor: '#F6F8FC',
    height: '100vh',
    fontWeight:'400',
    width: '250px',
    color:'#444746',
    "& .ShowNow": {
        width: 'fit-content',
    },
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        width: '250px',
        "& .ShowNow": {
            width: 'fit-content',
        }
    }
})

const ComposeIcon = styled(Icon)({
    padding: '14px',
    backgroundColor: '#c2e7ff',
    borderRadius: '20px',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    cursor: 'pointer',
    margin: '10px 15px',
    ':hover': {
        backgroundColor: '#c2e7ff',
        boxShadow: '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
        width: '140px',
    },

})

const Sidebar = () => {
   

    const dispatch = useDispatch()
   


    return (
        <SidebarBox>
            <ComposeIcon
                className='ShowNow'
                variant="contained"
                bgcolor='#C2E7FF'
                onClick={() => dispatch(openSendMessage())}
                 >

                <CreateOutlinedIcon />

                <Typography variant="p" fontStyle={500} fontSize={15} >
                    Compose
                </Typography>
              </ComposeIcon>

               <SideBarIcon IconType={InboxOutlinedIcon} IconName={'Inbox'} InsideNumber={'30'}  />
               <SideBarIcon IconType={StarBorderOutlinedIcon} IconName={'Stared'} InsideNumber={'10'}  />
               <SideBarIcon IconType={WatchLaterOutlinedIcon} IconName={'Snoozed'} InsideNumber={'30'}  />
               <SideBarIcon IconType={SendOutlinedIcon} IconName={'Sent'} InsideNumber={'30'}  />
               <SideBarIcon IconType={DescriptionOutlinedIcon} IconName={'Drafts'} InsideNumber={'30'}  />
               <SideBarIcon IconType={ExpandMoreOutlinedIcon} IconName={'More'}   />
               
        </SidebarBox >
        
    )
}

export default Sidebar