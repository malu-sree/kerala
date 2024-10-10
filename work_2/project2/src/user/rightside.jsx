import { Box, Stack } from "@mui/material"
//import * as React from 'react';
//import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Rightside(){
    return(
        <>
        <Box flex={1.4}  sx={{display:{xs:'none',sm:'block',lg:'block'}}}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Stack spacing={2}>
                    <label htmlFor="">
                        <a href="">
                        <FacebookIcon sx={{color:'red',fontSize:'40px'}}/>
                        </a>
                    </label>
                    <label htmlFor="">
                        <a href="">
                        <InstagramIcon sx={{color:'red',fontSize:'40px'}}/>
                        </a>
                    </label>
            </Stack>
    </Box>
        </Box>
        </>
    )
}
export default Rightside