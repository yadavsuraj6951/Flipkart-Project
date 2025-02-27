import { Box, styled } from "@mui/material";

import Slides from "./Slides";


const Mainbox = styled(Box)`
   display:flex;
`

const Productbox = styled(Box)(({ theme }) => ({
   width:'83%',
   [theme.breakpoints.down('md')]: {
     width:'100%'
   }
}));

const Adbox = styled(Box)(({ theme }) => ({
   background:'#FFFFFF',
   marginTop:15,
   marginLeft:15,
   width:'16%',
   textAlign:'center',
   [theme.breakpoints.down('md')]: {
    display:'none'
   }
}));

const Adslide = ({products, title, timer}) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <>
        <Mainbox>
            <Productbox>
                <Slides 
                  products={products} 
                  title={title} 
                  timer={timer}
                />
            </Productbox>
            <Adbox>
                 <img src={adURL} alt="Ad" style={{width:'100%',height:'100%', padding:'5px 0px', cursor:'pointer'}}/>
            </Adbox>
        </Mainbox>
        
        </>
    )
}

export default Adslide;