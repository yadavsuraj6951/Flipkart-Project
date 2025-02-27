
import { useSelector } from 'react-redux';

import { Typography, Grid, Box, styled, Button } from '@mui/material';

//component
import Cartitem from './Cartitem';
import TotalBalance from './TotalBalance';
import EmptyCart from './Empty';
import { Link } from 'react-router-dom';


const CartMenu = styled(Box)`
    
    padding:13px 0;
    background:#ecece4;
`

const Mainbox = styled(Grid)(({ theme }) => ({
    padding:'30px 0px 30px 80px',
    backgroundColor:'#ecece4',
    [theme.breakpoints.down('md')]: {
        padding:'15px 0'
    }
})) 

const Header = styled(Box)`
   padding: 15px 24px;
   background:#ffffff;
   margin-bottom:10px;
`

const Buttonwrapper = styled(Box)`
   padding:16px 22px;
   background:#fff;
   box-shadow:0 -2px 10px 0 rgb(0 0 0 / 20%);
   border-top:1px solid #f0f0f0;
`

const OrderButton = styled(Button)`
   display:flex;
   margin-left:auto;
   background:#fb641b;
   color:#fff;
   width:250px;
   height:51px;
   font-weight:600;
   font-size:16px;
`

const Footer = styled(Box)`
   display:flex;
   color:gray;
   margin-top:20px;
   height:50px;
`

const LeftBox = styled(Grid)(({ theme }) => ({
    backgroundColor:'#ecece4',
    [theme.breakpoints.down('sm')]: {
        marginBottom:'15px'
    }
}));

const RightBox = styled(Grid)(({ theme }) => ({
    backgroundColor:'#ffffff',
    marginLeft:'15px', 
    height:'330px',
    [theme.breakpoints.down('md')]: {
        marginLeft:'80px'
    }
}));
   


const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    return(
        <>
        <CartMenu>
            {
                cartItems.length ?
                    
                    <Mainbox container>
                        <LeftBox item lg={8} md={8} sm={12} xm={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            
                            {
                                cartItems.map(item => (
                                    <Cartitem item={item}/>
                                ))
                            }
                            
                            <Buttonwrapper>
                               <Link to="/placeorder" style={{textDecoration:'none'}}> <OrderButton>Place Order</OrderButton> </Link>
                            </Buttonwrapper>
                        </LeftBox>
                        <RightBox item lg={3} md={3} sm={12} xm={12} >
                              <TotalBalance cartItems={cartItems}/>
                        </RightBox>
                    </Mainbox>
                    
                : <EmptyCart/>
            }

                    <hr style={{marginTop:'0px'}}></hr>
                        <Footer>
                            <Typography style={{fontSize:'14px', marginLeft:'100px',cursor:'pointer'}}>Policies:Returns Policy | Terms of use | Security | Privacy</Typography>
                            <Typography style={{fontSize:'14px', marginLeft:'30px'}}>© 2007-2025 Flipkart.com</Typography>
                            <Typography style={{fontSize:'14px', marginLeft:'230px'}}>Need help? Visit the <span style={{color:'blue',cursor:'pointer'}}> Help Center</span> or <span style={{color:'blue',cursor:'pointer'}}>Contact Us</span></Typography>
                        </Footer>
        </CartMenu> 
        </>
    )
}

export default Cart;