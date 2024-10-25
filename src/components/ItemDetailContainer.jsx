import './ItemDetailContainer.css';
import BuyButtons from './BuyButtons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../firebase/firebase.js';

export default function ItemDetailContainer() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getSingleProduct(id).then((prod) => setProduct(prod));
    }, []);

    return (
        <>
            {product && (
                <div className='prodContainer'>
                    <h1 className='prodTitleDet'>{product.title}</h1>
                    <h5 className='categTitle'>Categoría: {product.category}</h5>
                    <img className='prodImageDet' src={product.image} alt={product.title} />
                    <h2 className='priceDet'>${product.price} - Stock: {product.stock}</h2>
                    <p className='description'>{product.description}</p>
                    <BuyButtons key={product.id} product={product}></BuyButtons>
                </div>
            )}
        </>
    )
}