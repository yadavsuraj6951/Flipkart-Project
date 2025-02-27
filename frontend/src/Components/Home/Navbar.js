
import { Box, styled, } from "@mui/material"

import { navData } from "../../ConstantData/Data"

const Nav = styled(Box)(({ theme }) => ({
    background:'white',
    height:130,
    [theme.breakpoints.down('md')]: {
        height:170
    }
}));
const Navd = styled(Box)(({ theme }) => ({
     display:'flex',
     justifyContent:'space-between',
     padding:'18px 20px 0 38px',
     overflow:'overlay',
     [theme.breakpoints.down('lg')]: {
        margin:0
     } 
    }));
const Mdata = styled(Box)`
     text-align: center; 
`
const Text = styled(Box)`
     font-size:14px;
    font-weight:650;
`

const Navbar = () => {
    return(
        <>
        <Nav>
       <Navd>
          {
            navData.map(data => (
                <Mdata style={{cursor:'pointer'}}>
                    <img src={data.url} alt="nav" style={{width:'64px'}} />
                    <Text>{data.text}</Text>
                </Mdata>
            ))
          }
       </Navd>
       </Nav>
       </>
    )
}

export default Navbar