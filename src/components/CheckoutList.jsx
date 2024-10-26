import './CheckoutList.css';
import CheckoutCard from './CheckoutCard';
import CheckoutForm from './CheckoutForm';
import { sendOrder } from '../firebase/firebase';
import { CartContext } from '../context/CartContext';
import { useContext, useState, useEffect } from 'react';


export default function CheckoutList() {

    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: ''
    })

    const [cart, , , , , clearCart] = useContext(CartContext);

    useEffect(() => {
        setTotalPrice(cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0));
    }, [])

    const shortCart = cart.map(({ shortDesc, description, stock, ...rest }) => ({
        ...rest
    }));

    //Rellenar
    const handleClickSend = () => {
        const newOrder = {
            buyer: {
                name: formData.name,
                lastName: formData.lastName,
                phone: formData.phone,
                email: formData.email
            },
            date: new Date(),
            products: shortCart,
            total: totalPrice
        }

        console.log(newOrder);
        sendOrder(newOrder).then((id) => setOrderId(id));
    }

    const handleClickCleaner = () => {
        clearCart();
    }

    return (
        <>
            <section className='checkout'>
                <h1>Carrito de compras</h1>
                {<div className='listContainer'>
                    {cart.map((product) => (
                        <CheckoutCard key={product.id} product={product}></CheckoutCard>
                    ))}
                </div>}
                <p>Precio total: ${totalPrice}</p>
                <CheckoutForm formData={formData} setFormData={setFormData} />
                <button onClick={handleClickSend}>Completar Orden</button>
                <button onClick={handleClickCleaner}>Limpiar Orden</button>
            </section>
        </>
    )
}