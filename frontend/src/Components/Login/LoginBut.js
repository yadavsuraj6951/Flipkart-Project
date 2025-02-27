import { useState, useContext } from 'react';
import { Box, Dialog, TextField, Typography, Button, styled } from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../Context/DataProvider';


const Mainbox = styled(Box)`
     height:73vh;
     width:100vh;
     display:flex;
`
const Imagebox = styled(Box)`
     background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
     height:100%;
     width:40%;
     padding:30px 35px;
     & > p, & > h5 {
        color:#ffffff;
     }
`

const Formbox = styled(Box)`
    padding:0px 25px;
    display:flex;
    flex-direction:column;
    flex:1;
    & > button, & > p{
         margin-top:20px;
     } 
    & > div{
        margin-top:10px;
    }
`

const Loginbutton = styled(Button)`
    text-transform:none;
    font-size:17px;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
    box-shadow:1px 2px 5px 1px rgb(0 0 0/ 20%);
`

const Otpbutton = styled(Button)`
    text-transform:none;
    font-size:15px;
    font-weight:600;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:1px 2px 5px 1px rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const Createaccount = styled(Typography)`
     font-size:14px;
     text-align:center;
     color:#2874f0;
     font-weight:600;
     cursor:pointer;
`
const Error = styled(Typography)`
      font-size:12px;
      color:#ff6161;
      line-height:0;
      font-weight:600;
`

const CoverBox = styled(Box)`
    display:flex;
`

const accountIntitialValue ={
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const signupIntitialValue ={
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''
}

const loginIntitialValue ={
    email:'',
    password:''
}

const LoginBut = ({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountIntitialValue.login)
    
    const [signup, setSignup] = useState(signupIntitialValue);

    const [login, setLogin] = useState(loginIntitialValue);

    const [error, setError] = useState(false)

    const {setAccount} = useContext(DataContext);

    const toggleSignup = () => {
        toggleAccount(accountIntitialValue.signup)
    }

    const toggleLogin = () => {
        toggleAccount(accountIntitialValue.login)
    }

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountIntitialValue.login)
        setError(false);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value })
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
         setLogin({...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname)
        }
        else{
            setError(true);
        }
        
    }

    return(
        <>
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
            <Mainbox>
            {
                   account.view === 'login' ?
                <CoverBox>
                <Imagebox>
                    <Typography variant='h5'>Login</Typography>
                    <Typography style={{marginTop:'20px'}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                </Imagebox>
               
                <Formbox>
                   { error && <Error>Enter valid Email & Password</Error>}
                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='email' label="Enter Email/Mobile Number"/>
                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
                    <Text>By continuing, you agree to Flipkart's <span style={{color:'blue',cursor:'pointer'}}> Terms of Use</span> and <span style={{color:'blue',cursor:'pointer'}}>Privacy Policy</span>.</Text>
                    <Loginbutton onClick={() => loginUser()}>Login</Loginbutton>
                    <Typography style={{textAlign:'center', color:'#878787'}}>OR</Typography>
                    <Otpbutton>Request OTP</Otpbutton>
                    <Createaccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</Createaccount>
                </Formbox>
                </CoverBox>
                :
                <CoverBox>
                <Imagebox>
                <Typography variant='h5'>Looks like you're new here!</Typography>
                <Typography style={{marginTop:'20px'}}>Sign up with your details to get started</Typography>
            </Imagebox>
                <Formbox>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone Number"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
            
                <Loginbutton onClick={() => signupUser()}>Continue</Loginbutton>
                <Createaccount onClick={() => toggleLogin()}>Existing User? Log in</Createaccount>
            </Formbox>
            </CoverBox>
             }
            </Mainbox>
        </Dialog>
        </>
    )
}

export default LoginBut;