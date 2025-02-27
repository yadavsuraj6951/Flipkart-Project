
import { useEffect, useState } from "react"

//component
import Navbar from "./Navbar"
import Banner from "./Banner"
import Slides from "./Slides"

import { Box, styled } from "@mui/material"
import axios from "axios"
import Adslide from "./Adslide"
import Midbanner from "./Midbanner"

const URL = 'http://localhost:4000'


const Back = styled(Box)`
   padding:10px 15px;
   background:#ecece4;
`
const Back1 = styled(Box)`
    padding:6px 15px;
   background:#ecece4;
`

const Home = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchproduct = async () => {
            const data = await axios.get(`${URL}/products`);
            setProduct(data.data);
        }
        fetchproduct();
    }, []);

    return(
        <>
        <Back>
       <Navbar></Navbar>
       </Back>
       <Back1>
       <Banner> </Banner>
       <Adslide products={products} title="Deal of the Day" timer={true}/>
       <Slides products={products} title="Discounts for You" timer={false}/>
       <Midbanner/>
       <Slides products={products} title="Suggesting Items" timer={false}/>
       <Slides products={products} title="Top Selection" timer={false}/>
       <Slides products={products} title="Recommended Items" timer={false}/>
       <Slides products={products} title="Trending Offers" timer={false}/>
       <Slides products={products} title="Top Deals on Accessories" timer={false}/>
       <Slides products={products} title="Season's top picks" timer={false}/>
       </Back1>
       </>
    )
}

export default Home