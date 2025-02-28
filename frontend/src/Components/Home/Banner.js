
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { styled } from '@mui/material';

import { bannerData } from '../../ConstantData/Data';

const Image = styled('img')(({ theme }) => ({
   width:'100%',
   height:200,
   cursor:'pointer',
   [theme.breakpoints.down('md')]: {
    objectFit:'cover',
    height:140
   }
  }));

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    return(
        <>
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}  
        keyBoardControl={true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        
        >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt='Banner'/>
                ))
            }
        </Carousel>
        </>
    )
}

export default Banner