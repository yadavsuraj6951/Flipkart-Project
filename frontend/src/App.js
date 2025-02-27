//component
import Home from "./Components/Home/Home";
import Nav from "./Components/NavigationBar/Nav"; 
import DetailsView from "./Components/Details/DetailsView";

import DataProvider from "./Context/DataProvider";

import { Box } from "@mui/material";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./Components/Cart/Cart";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import EmptyCart from "./Components/Cart/Empty";





function App() {
    return(
    <DataProvider>
        <BrowserRouter>
              <Nav/>
            <Box style={{marginTop:'64px'}}>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/product/:id' element={<DetailsView/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path="/emptycart" element={<EmptyCart/>} />
                  <Route path="/placeorder" element={<PlaceOrder/>}/>
                </Routes>
            </Box>
        </BrowserRouter> 
     </DataProvider>
    )
}

export default App