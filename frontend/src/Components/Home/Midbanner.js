
import { Grid, styled } from '@mui/material';
import { imageURL } from '../../ConstantData/Data.js';


const Wrapper = styled(Grid)`
    margin-top:15px;
    justify-content:space-between;
`

const Image = styled('img')(({ theme }) => ({
    marginTop:15,
    width:'100%',
    height:220,
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]: {
        objectFit:'cover',
        height:120
    }
}));

const Midbanner = () => {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid lg={4} sm={12} md={4} xs={12}>
                    <img src={image} alt="banner" style={{width:'100%'}}/>
                    </Grid>
                ))
            }
        </Wrapper>
        <Image src={url} alt='air'/>
        </>
    )
}

export default Midbanner;