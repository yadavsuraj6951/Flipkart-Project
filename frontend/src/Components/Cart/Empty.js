import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Body = styled(Box)`
    height:520px;
    background:#ecece4;
     padding:30px 80px;
`

const MainBox = styled(Box)`
   background:#fff;
   height:65vh; 
`

const SecondBox = styled(Box)`
   text-align:center;
   padding-top:60px;
`



const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return(
        <>
        <Body>
            <MainBox>
                <SecondBox>
                    <img src={imgurl} alt="empty" style={{width:'20%'}}/>
                    <Typography style={{fontSize:'17px', marginTop:'30px'}}>Your cart is empty!</Typography>
                  <Link to="/" style={{textDecoration:'none'}}>  <Typography style={{fontSize:'14px', marginTop:'10px'}}>Explore our wide selection and find something you like</Typography> </Link>
                </SecondBox>
            </MainBox>
           
        </Body>
        </>
    )
}

export default EmptyCart;