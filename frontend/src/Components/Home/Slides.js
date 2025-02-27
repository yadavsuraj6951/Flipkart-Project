

import { Box, Button, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Mainbox = styled(Box)`
      background:#ffffff;
      margin-top:15px;
  `

  const Deal = styled(Box)`
      padding:15px 20px 0px 20px;
      display:flex;
  `

  const Timer = styled(Box)`
      display:flex;
      margin-left:3px;
      margin-top:5px;
      align-item:center;
      color:#7f7f7f;
  `

  const Dealtext = styled(Typography)`
     font-size:22px;
     font-weight:600;
     margin-right:25px;
     line-height:32px;
  `

  const Viewallbutton = styled(Button)`
     margin-left:auto;
     backgroun:#2874f0;
     border-radus:2px;
     font-size:13px;
     font-weight:600;
  `

  const Image = styled('img') ({
     width:'auto',
     height: 140,
     cursor:'pointer'
  });

  const Text = styled(Typography)`
    font-size:14px;
    margin-top:5px;
    cursor:pointer;
  `
    
  

const Slides = ({ products, title, timer }) => {

  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

   const renderer = ({ hours, minutes, seconds}) => {
         return <Box>{hours}:{minutes}:{seconds} Left</Box>;
   }

    return(
        <>
        <Mainbox>
          <Deal>
            <Dealtext>{title}</Dealtext>
            {
              timer &&
                 <Timer>
                     <img src={timerURL} alt='time' style={{width:'24px', marginRight:'5px'}}/>
                     <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                 </Timer>
            }
            <Viewallbutton variant='contained' color='primary'>View All</Viewallbutton>
          </Deal>
          <hr></hr>
        <Carousel 
         responsive={responsive}
         swipeable={false}
         draggable={false}
         infinite={false}
         autoPlay={false}
         slidesToSlide={1}
         containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
          {
            products.map(product => (
              <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
              <Box textAlign="center" style={{padding:'10px 15px 5px 15px', }} >
                  <Image className='img' src={product.url} alt='product'/>
                  <Text style={{fontWeight:'600', color:'#212121'}}>{product.title.shortTitle}</Text>
                  <Text style={{color:'green'}}>{product.discount}</Text>
                  <Text style={{color:'#212121', opacity:'.6'}}>{product.tagline} <hr></hr></Text>
              </Box>
              </Link>
              ))
          }
          </Carousel>
          </Mainbox>
        </>
    )
}

export default Slides;