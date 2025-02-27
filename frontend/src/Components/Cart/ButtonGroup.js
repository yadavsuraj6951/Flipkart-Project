import { Button, ButtonGroup, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../Redux/actions/cartAction"; // Action to update quantity in Redux

const Buttonquantity = styled(ButtonGroup)`
   margin-top:20px;
`;

const Styledbutton = styled(Button)`
   border-radius: 50%;
   border:1px solid gray;
`;

const ButtonsGroup = ({ item }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity || 1);

    const handleIncrease = () => {
        setQuantity(prevQty => prevQty + 1);
        dispatch(updateCartQuantity(item.id, quantity + 1)); // Update Redux store
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQty => prevQty - 1);
            dispatch(updateCartQuantity(item.id, quantity - 1)); // Update Redux store
        }
    };

    return (
        <Buttonquantity>
            <Styledbutton onClick={handleDecrease}>-</Styledbutton>
            <Button disabled style={{ border: "1px solid gray",color:'black' }}>{quantity}</Button>
            <Styledbutton onClick={handleIncrease}>+</Styledbutton>
        </Buttonquantity>
    );
};

export default ButtonsGroup;
