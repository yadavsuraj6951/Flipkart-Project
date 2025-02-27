import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Grid, styled, } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";

const URL = 'http://localhost:4000'

const Mainbox = styled(Box)`
    background:#F2F2F2;
    margin:0 15px;
    padding:13px 0;
`
const Secondbox = styled(Grid)(({theme}) => ({
    background:'#FFFFFF',
    display:'flex',
    [theme.breakpoints.down('md')]: {
        margin:0
    }
}))

const Rightside = styled(Grid)(({ theme }) => ({
    marginTop:'45px',
    [theme.breakpoints.down('md')]: {
        marginLeft:'20px'
    }
}))



const DetailsView = () => {

    const [product, setProduct] = useState([]);
    const  { id } = useParams();

    useEffect(() => {
        const fetchproduct = async () => {
            const data = await axios.get(`${URL}/products/${id}`);
            setProduct(data.data );
            
        }
        fetchproduct();
    }, [id]);

    return(
        <>
        <Box style={{backgroundColor:'#ecece4'}}>
        <Mainbox>         {
          product && Object.keys(product).length &&
          <Secondbox container>
              <Grid item lg={4.5} md={4} sm={8} xm={12} >
                  <ActionItem product={product}/>
              </Grid>
              <Rightside item lg={7.5} md={8} sm={8} xm={12} >
                  <ProductDetails product={product}/>
              </Rightside>
          </Secondbox>
         }
         </Mainbox>
         </Box>
        </>
    )
}

export default DetailsView;