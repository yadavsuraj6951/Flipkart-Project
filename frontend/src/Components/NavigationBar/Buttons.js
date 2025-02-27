import { useState, useContext } from "react";

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import { Badge, Box, Button, styled, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { DataContext } from "../../Context/DataProvider";

//component
import LoginBut from "../Login/LoginBut";
import Profile from "./Profile";



const Wrapper = styled(Box)(({ theme }) => ({
    display:'flex',
    margin:'0 3% 0 auto',
    '& > *': {
       marginRight: '40px',
       fontSize: '15px'
    },
    [theme.breakpoints.down('md')]: {
        display:'block'
    }
}))

const Container = styled(Link)(({ theme }) => ({
    display:'flex',
    marginTop:'10px',
    textDecoration:'none',
    color:'black',
    [theme.breakpoints.down('md')]: {
        display:'block'
    }
}))

const LoginButton = styled(Button)`
     color:black;
     background: #fff;
     text-transform:none; 
     margin-left: 23px;
     padding:7px 10px 7px 10px;
     border-radius:8px;
     box-shadow:none;
     margin-top:2px;
     
`

const Buttons = () =>{
    const [open, setOpen] = useState(false);

    const {account, setAccount} = useContext(DataContext);

    const { cartItems  } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true)
    }
    return(
        <>
        <Wrapper>
            {
                account ? 
                <Profile account={account} setAccount={setAccount}/>
            :
            <Box className="dropdown">
            <LoginButton variant="contained" className="log" onClick={() => openDialog()}>
                <PersonIcon style={{fontSize:'23',marginRight:'8px'}}/>
               <span style={{fontSize:'15px'}}> Login</span>
                <KeyboardArrowDownIcon style={{marginLeft:'5px'}}/>
            </LoginButton>
            <Box className="dropdown-content" style={{height:'200px'}}>
                 <Typography>Hello</Typography>
            </Box>
            </Box>
            }

            <Container style={{cursor:'pointer'}} to="/cart">
                <Badge badgeContent={cartItems?.length} color="primary">
                     <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft:'5px'}}>Cart</Typography>
            </Container>
            

            <Typography style={{width:175,fontSize:16,marginTop:9, color:'black', cursor:'pointer'}}><StorefrontIcon style={{marginTop:'-2',marginRight:'10px',}}/>Become a Seller</Typography>

            <Box className="dropdown">
            <Button style={{marginTop:'3px', marginLeft:'0px', color:'black'}}><MoreVertIcon/></Button>
            <Box className="dropdown-content more">
                <Typography>Hello</Typography>
            </Box>
            </Box>

            <LoginBut open={open} setOpen={setOpen}></LoginBut>
        </Wrapper>
        </>
    )
}

export default Buttons 