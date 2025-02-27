
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Grid, Box, styled, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import TotalBalance from '../Cart/TotalBalance';

import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';

import { clearCart } from '../../Redux/actions/cartAction';
import { useNavigate } from 'react-router-dom';






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

const Header = styled(Box)`
   padding: 15px 24px;
   background:blue;
   margin-bottom:10px;
   color:#ffff;

`
const Address = styled(Box)`
     background:#fff;
     padding:25px 80px;
     
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



const PlaceOrder = () => {

    const { cartItems } = useSelector(state => state.cart);
   
    const navigate = useNavigate();

    const dispatch = useDispatch();


    const handleOrder  = () => {
        toast("Your order placed successfully");
    
        setTimeout(() => {
            dispatch(clearCart()); 
            navigate("/emptycart"); 
        }, 2000);
    }

    

    

     return(
        <>
         <CartMenu> 
                    <Mainbox container>
                        <LeftBox item lg={8} md={8} sm={12} xm={12}>
                            <Header>
                                <Typography style={{fontWeight:'600'}}>DELIVERY ADDRESS</Typography>
                            </Header>
                            <Address>
                            <TextField required variant="outlined" label="Name" style={{width:'300px'}}/>
                            <TextField required variant="outlined" label="10-digit mobile number" style={{width:'300px',marginLeft:'10px'}}/>
                            <TextField required variant="outlined" label="Pincode" style={{width:'300px',marginTop:'10px'}}/>
                            <TextField required variant="outlined" label="Locality" style={{width:'300px',marginLeft:'10px',marginTop:'10px'}}/>
                            <TextField required variant="outlined" label="Address(Area and Street)" style={{width:'610px',marginTop:'10px'}}/>
                            <Box style={{display:'flex',marginTop:'10px'}}>
                            <TextField required variant="outlined" label="City/District/Town" style={{width:'300px',}}/>
                            <Form.Select required aria-label="Default select example" style={{width:'300px', height:'56px', border:'1px gray solid',marginLeft:'10px'}}>
                                    <option>--Slelect State--</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                            </Form.Select>
                            </Box>
                            <TextField variant="outlined" label="Landmark (Optional)" style={{width:'300px',marginTop:'10px'}}/>
                            <TextField variant="outlined" label="Alternate Phone (Optional)" style={{width:'300px',marginLeft:'10px',marginTop:'10px'}}/>
                            <Box style={{marginTop:'10px'}}>
                                <FormLabel id="demo-controlled-radio-buttons-group">Address Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                   
                                >
                                    <FormControlLabel value="home" control={<Radio />} label="Home (All day delivery)"/>
                                    <FormControlLabel value="work" control={<Radio />} label="Work (Delivery between 10 AM - 5 PM)" />
                                </RadioGroup>
                            </Box>
                            </Address>
                            <Buttonwrapper>
                                <OrderButton onClick={handleOrder}>DELIVER HERE</OrderButton> 
                                <ToastContainer/>    
                            </Buttonwrapper>
                        </LeftBox>
                        <RightBox item lg={3} md={3} sm={12} xm={12} >
                              <TotalBalance cartItems={cartItems}/>
                        </RightBox>
                    </Mainbox>
                    

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

export default PlaceOrder;  