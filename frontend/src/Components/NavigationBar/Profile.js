import { Box,styled,Button } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';



const LoginButton1 = styled(Button)`
     color:black;
     background: #fff;
     text-transform:none; 
     margin-left: 23px;
     padding:7px 10px 7px 10px;
     border-radius:8px;
     box-shadow:none;
     margin-top:2px;
     `

const Logoutbutton = styled(Button)`
      width:100%;
      color:black;
      font-size:13px;
      padding-right:80px;
`




const Profile = ({account, setAccount}) => {

    const logoutUser = () => {
        setAccount('');
    }

    return(
        <>
      

        <Box className="dropdown">
                <LoginButton1 variant="contained" className="log2">
                    <PersonIcon style={{fontSize:'23',marginRight:'8px'}}/>
                   <span style={{fontSize:'15px'}}> {account} </span>
                    <KeyboardArrowDownIcon style={{marginLeft:'5px'}}/>
                </LoginButton1>
                <Box className="dropdown-content" style={{height:'200px',}}>
                     <Logoutbutton onClick={() => {logoutUser();}}><LogoutIcon style={{marginRight:'10px', fontSize:'19px'}}/>Logout</Logoutbutton>
                </Box>
                </Box>
        </>
    )
}

export default Profile;