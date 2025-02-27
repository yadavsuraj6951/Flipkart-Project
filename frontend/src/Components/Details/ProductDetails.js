import { Box, styled, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Tabletext = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & > td {
      font-size:14px;
      margin-top:10px;
      border:none;
    }
`

const ProductDetails = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const data = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));

    return(
        <>
           <Typography style={{cursor:'pointer'}}>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:'5px', color:'#878787', fontSize:'14px', cursor:'pointer'}}>
                88 Ratings & 20 Reviews
                <Box component="span"><img src={fassured} alt="flipkart" style={{width:'77px', marginLeft:'20px'}}/></Box>
            </Typography>
            <Typography style={{color:'#388E3C', fontWeight:'500',marginTop:'10px'}}>Special price</Typography>
            <Typography>
                <Box component="span" style={{fontSize:'28px', fontWeight:'550'}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C', fontWeight:'550'}}>{product.price.discount} off</Box>
            </Typography>
            <Typography style={{fontSize:'16px', fontWeight:'600'}}>Available offers</Typography>
             <Box>
                <Typography style={{fontSize:'14px',marginTop:'10px'}}><LocalOfferIcon style={{color:'green', fontSize:'18px'}}/><span style={{fontWeight:'550', fontSize:'14px'}}>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span style={{color:'blue',cursor:'pointer'}}> T&C </span></Typography>
                <Typography style={{fontSize:'14px',marginTop:'10px'}}><LocalOfferIcon style={{color:'green', fontSize:'18px'}}/><span style={{fontWeight:'550', fontSize:'14px'}}>Bank Offer</span> 10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above <span style={{color:'blue',cursor:'pointer'}}> T&C </span></Typography>
                <Typography style={{fontSize:'14px',marginTop:'10px'}}><LocalOfferIcon style={{color:'green', fontSize:'18px'}}/><span style={{fontWeight:'550', fontSize:'14px'}}>Bank Offer</span> 10% off on BOBCARD Transactions, up to ₹1,000 on orders of ₹5,000 and above <span style={{color:'blue',cursor:'pointer'}}> T&C </span></Typography>
                <Typography style={{fontSize:'14px',marginTop:'10px'}}><LocalOfferIcon style={{color:'green', fontSize:'18px'}}/><span style={{fontWeight:'550', fontSize:'14px'}}>Special Price</span> Get extra 49% off (price inclusive of cashback/coupon) <span style={{color:'blue',cursor:'pointer'}}> T&C </span></Typography>  
             </Box>
             <Table style={{marginTop:'20px'}}>
                <TableBody>
                    <Tabletext>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:'600'}}>Delivery by {data.toDateString()} | ₹40</TableCell>
                    </Tabletext>
                    <Tabletext>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </Tabletext>
                    <Tabletext>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available ?</Typography>
                            <Typography>7 Days Service Center Replacement/Repair ?</Typography>
                            <Typography></Typography>
                        </TableCell>
                    </Tabletext>
                    <Tabletext>
                        <TableCell colSpan={2}>
                              <img src={adURL} style={{width:'390px'}} alt="Flipkartpoint"/>
                        </TableCell>
                    </Tabletext>
                    <Tabletext>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </Tabletext>
                </TableBody>
             </Table>
        </>
    )
}

export default ProductDetails;