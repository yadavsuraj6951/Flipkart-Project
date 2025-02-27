import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Header = styled(Box)`
   padding:15px 24px;
   border-bottom:1px solid  #f0f0f0;
`;

const Heading = styled(Typography)`
   color:#878787;
   font-weight:600;
`;

const Pricedetail = styled(Box)`
    padding:15px 24px;
    & > p {
      margin-bottom:20px;
    }
`;

const Price = styled(Box)`
    float:right;
`;

const Discount = styled(Typography)`
    font-size:14px;
    color:green;
    font-weight:550;
`;

const Totalamount = styled(Typography)`
    font-weight:600;
    font-size:17px;
    padding:20px 0;
    border-bottom:1px dashed rgb(219, 214, 214);
    border-top:1px dashed  rgb(219, 214, 214);
`;

const TotalBalance = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let totalPrice = 0, totalDiscount = 0;
        cartItems.forEach(item => {
            totalPrice += item.price.mrp * item.quantity;
            totalDiscount += (item.price.mrp - item.price.cost) * item.quantity;
        });
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    };

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Pricedetail>
                <Typography>Price ({cartItems.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span" style={{color:'green'}}>-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Totalamount>Total Amount
                    <Price component="span">₹{price - discount + 40}</Price>
                </Totalamount>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Pricedetail>
        </Box>
    );
};

export default TotalBalance;
