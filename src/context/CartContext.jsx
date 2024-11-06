import Swal from 'sweetalert2';
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

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
                        ? { ...item, quantity: item.quantity - 1 }
                        : null;
                }
                return item;
            }).filter((item) => item != null);
            setCart(updateCart);
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No existe este producto en el carrito para quitarlo!",
                showConfirmButton: false,
                timer: 2000
            });
            console.log("No existe este producto en el carrito para quitarlo!");
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    }

    const getTotals = () => {
        return cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
    }

    return (
        <CartContext.Provider value={[cart, setCart, addItem, removeItem, isInCart, clearCart, getTotals]}>
            {children}
        </CartContext.Provider>
    )
}