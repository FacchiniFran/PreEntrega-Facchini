import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (product) => {

        if (isInCart(product.id)) {
            const updateCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updateCart);
        } else {
            const cartProd = { ...product, quantity: 1 };
            setCart([...cart, cartProd]);
        }
    }

    const removeItem = (id) => {

        if (isInCart(id)) {
            const updateCart = cart.map((item) => {
                if (item.id === id) {
                    return item.quantity > 1
                    ? {...item, quantity: item.quantity - 1}
                    : null;
                }
                return item;
            }).filter((item) => item != null);
            setCart(updateCart);
        } else {
            console.log("No existe este producto en el carrito para quitarlo!");
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={[cart, setCart, addItem, removeItem, isInCart, clearCart]}>
            {children}
        </CartContext.Provider>
    )
}