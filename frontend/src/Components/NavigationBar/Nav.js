import { useState } from 'react';

import {AppBar, Toolbar, Box, styled, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//component
import Search from './Search';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';


const Buttony = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display:'none'
    }
}))

const Menubutton = styled(IconButton)(({ theme }) => ({
    display:'none',
    marginBottom:'10px',
    [theme.breakpoints.down('md')]: {
        display:'block'
    }
}))

const Nav = () => {

     const [open, setOpen] = useState(false);

     const handleOpen = () => {
        setOpen(true);
     }

     const handleClose = () => {
        setOpen(false);
     }

     const list = () => (
        <Box style={{width:'200px',}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <Buttons/>
                </ListItem>
            </List>
        </Box>
     )

    return (
        <>
        <AppBar className='bg-white'>
            <Toolbar>
                <Menubutton style={{color:'black'}} onClick={handleOpen}>
                    <MenuIcon/>
                </Menubutton>

                <Drawer open={open} onClose={handleClose}>
                   {list()}
                </Drawer>

                <Box>
                    <Link to={'/'}>
                       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt='nav' style={{marginLeft:'6px', cursor:'pointer'}}></img>
                   </Link>
                </Box>
                <Search/>
                <Buttony>
                    <Buttons/>
                </Buttony>
            </Toolbar>
        </AppBar>
        </> 
    )
}

export default Nav