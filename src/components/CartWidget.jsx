import './CartWidget.css';
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
    
    const [cart, , , , , , getTotals] = useContext(CartContext);

    const totalQuantity = getTotals();

    return (
        <>
            <NavLink className='cart' id='cart' to={`/checkout`}>{totalQuantity} 🛒</NavLink>
        </>
    )
}