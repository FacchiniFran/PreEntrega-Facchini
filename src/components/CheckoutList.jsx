import './CheckoutList.css';
import Swal from 'sweetalert2';
import CheckoutCard from './CheckoutCard';
import CheckoutForm from './CheckoutForm';
import { sendOrder } from '../firebase/firebase';
import { CartContext } from '../context/CartContext';
import { useContext, useState, useEffect } from 'react';


export default function CheckoutList() {

    const [orderId, setOrderId] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        emailV: ''
    })

    const [cart, , , , , clearCart] = useContext(CartContext);

    useEffect(() => {
        setTotalPrice(cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0));
    }, [cart])

    const shortCart = cart.map(({ shortDesc, description, stock, ...rest }) => ({
        ...rest
    }));

    const handleClickSend = () => {

        if (formData.email !== formData.emailV) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Los correos electrónicos no coinciden. Por favor, verifica e intenta nuevamente.",
                showConfirmButton: true,
                confirmButtonText: "Ok"
            });
            return;
        }

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

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Se ha generado la orden: " + orderId,
            showConfirmButton: false,
            timer: 2000
        });
    }

    const handleClickCleaner = () => {
        clearCart();

        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Se han quitado todos los elementos del carrito.",
            showConfirmButton: false,
            timer: 2000
        });
    }

    return (
        <>
            <section className='checkout'>
                {<div className='checkListContainer'>
                    <h1 className='checkMainTitle'>Carrito de compras</h1>
                    {cart.map((product) => (
                        <CheckoutCard key={product.id} product={product}></CheckoutCard>
                    ))}
                </div>}
                <div className='orderContainer'>
                    <CheckoutForm formData={formData} setFormData={setFormData} />
                    <h4 className='totalPrice'>Precio total: ${totalPrice}</h4>
                    <button className='orderFinalButton' onClick={handleClickSend}>Completar Orden</button>
                    <button className='orderFinalButton' onClick={handleClickCleaner}>Limpiar Orden</button>
                </div>
            </section>
        </>
    )
}