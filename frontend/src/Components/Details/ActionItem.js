import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { addToCart } from "../../Redux/actions/cartAction";
import { useState } from "react";



const Leftside = styled(Box)(({ theme }) => ({
   minWidth:'40%',
   padding: '35px 0 0 80px',
   [theme.breakpoints.down('lg')]: {
      padding:'18px 40px'
   }
}))

const Image = styled('img')({
    padding:'15px 20px',
    border:'1px solid #f0f0f0',
    width:'95%',
    cursor:'pointer'
});

const Buttons = styled(Button)(({ theme }) => ({
    width:'46%',
    height:'50px',
    borderRadius:'2px',
    marginTop:'10px',
    [theme.breakpoints.down('lg')]: {
        width:'46%'
    },
    [theme.breakpoints.down('sm')]: {
        width:'46%'
    }
}))


const ActionItem = ({ product }) => {

   

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

   
    return(
        <>
        <Leftside>
            <Image src={product.detailUrl} alt="product"/>
            <Buttons variant="contained" onClick={() => addItemToCart()} style={{marginRight:'10px', background:'#ff9f00'}}><ShoppingCartIcon/>ADD TO CART</Buttons>
            <Link to="/placeorder" style={{textDecoration:'none'}}> <Buttons variant="contained" style={{background:'#fb541b'}}><FlashOnIcon/>BUY NOW</Buttons></Link>
        </Leftside>
        </>
    )
}

export default ActionItem;