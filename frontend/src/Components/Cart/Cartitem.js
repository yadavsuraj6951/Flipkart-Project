import { Box, Button, styled, Typography } from "@mui/material";

import { addEllipsis } from "../../Utils/Common-utils";
import ButtonsGroup from "./ButtonGroup";
import { removeFromCart } from '../../Redux/actions/cartAction';
import { useDispatch } from "react-redux";

const MainBox = styled(Box)`
   border-top:2px solid #f0f0f0;
   display:flex;
   background:#ffffff;
   <Box style={{backgroundColor:'#ffffff', display:'flex'}}>
`;
const LeftBox = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`;

const RightBox = styled(Box)`
    margin-top:20px;
    display:flex;
`

const Sellertext = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
`;

const Removebutton = styled(Button)`
   margin-top:18px;
   font-size:15px;
   color:#000;
   font-weight:600;
`

const Cartitem = ({ item }) => {

   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

   const data = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));

   const dispatch = useDispatch();

   const removeItemFromCart = (id) => {
      dispatch(removeFromCart(id));
   }

    return(
        <>
          <MainBox>
             <LeftBox>
                <img src={item.url} alt="product" style={{width:'120px',height:'120px',cursor:'pointer',}}/>
                <ButtonsGroup item={item}/>
             </LeftBox>
             <RightBox>
               <Box>
                <Typography style={{cursor:'pointer'}} className="title">{addEllipsis(item.title.longTitle)}</Typography>
                <Sellertext>Seller:RetailNet
                   <Box component="span"><img src={fassured} alt="Flipkart" style={{width:'50px', marginLeft:'10px', marginTop:'-2px'}}/></Box>
                </Sellertext>
                <Typography style={{margin:'20px 0'}}>
                <Box component="span" style={{fontWeight:'600', fontSize:'18px'}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C', fontWeight:'550'}}>{item.price.discount} off</Box>
            </Typography>
            <Removebutton onClick={() => removeItemFromCart(item.id)}>Remove</Removebutton>
            </Box>
            <Typography style={{fontSize:'13px',marginTop:'2px', marginLeft:'20px', marginRight:'10px'}}>Delivery by {data.toDateString()} | ₹40</Typography>
             </RightBox>
          </MainBox>
        </>
    )
}

export default Cartitem;