import { useState, useEffect } from "react";
import axios from "axios";

import { InputBase, Box, styled, List, ListItem, } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const URL = 'http://localhost:4000'

const Searchcontainer = styled(Box)`
    background: #e1f5fe;
    width: 38%;
    height: 38px;
    border-radius: 7px;
    margin-left: 35px;
    display: flex
    
`
const InputSearch = styled(InputBase)`
    width: 100%;
    padding: 4px;
    font-size:17px;
    padding-left:40px
    
`
const SearchIconWrap = styled(Box)`
    color:gray;
    position: absolute;
    padding: 5px 10px
      
`

const Listwrapper = styled(List)`
    position:absolute;
    background:#FFFFFF;
    color:#000;
    margin-top:36px;
    width:36%;
`
const Image = styled('img')({
    width:'30px',
    height:'30px',
    marginRight:'10px',
    border:'1px solid #f0f0f0',
})

const Search =()=>{

     const [text, setText] = useState('');
     
     const [products, setProduct] = useState([]);

     useEffect(() => {
         const fetchproduct = async () => {
             const data = await axios.get(`${URL}/products`);
             setProduct(data.data);
         }
         fetchproduct();
     }, []);

     const getText = (text) => {
        setText(text);
     }

    return(
        <>
        <Searchcontainer>
          <InputSearch
             placeholder="Search for Product, Brand and More"
             onChange={(e) => getText(e.target.value)}
             value={text}
          />
        <SearchIconWrap>
             <SearchIcon style={{fontSize:'25px', cursor:'pointer'}} /> 
        </SearchIconWrap>
        {
            text &&
              <Listwrapper>
                  {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                       
                       <ListItem>
                        <Link 
                        to={`/product/${product.id}`} 
                        style={{textDecoration:'none', color:'black'}}
                        onClick={() => setText('')}
                        >
                            <Image src={product.url} alt="product"/>
                            {product.title.longTitle}
                        </Link>
                        </ListItem>
                    ))
                  }
              </Listwrapper>
        }
        </Searchcontainer>
        </>
    )
}

export default Search