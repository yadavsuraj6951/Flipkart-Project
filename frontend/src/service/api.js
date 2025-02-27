import axios from 'axios';

const URL = 'http://localhost:4000'
export const authenticateSignup = async (data) => {
    try{
       return await axios.post(`${URL}/signup`,data);
    }catch(error) {
        console.log('Error while calling api',error);
    }
}



export const authenticateLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login`,data);
    }catch(error) {
        console.log('Error while calling api',error);
        return error.response;
    }
}

export const authenticategetProduct = async (data) => {
    try{
        return await axios.get(`${URL}/products`,data);
    }catch(error) {
        console.log('Error while calling api',error);
        return error.response;
    }
}

export const authenticategetProductDetails = (id) => async (data) => {
    try{
        return await axios.get(`${URL}/products/${id}`,data);
    }catch(error) {
        console.log('Error while calling api',error);
        return error.response;
    }
}







