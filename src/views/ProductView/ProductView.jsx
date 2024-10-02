import './ProductView.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar.jsx';
import { getProduct } from '../../productList.js';

export default function ProductView() {

    const [product, setProduct] = useState({});

    const { id } = useParams();

    useEffect(() => {
        setProduct(getProduct(id));
    }, []);


    return (
        <>
            <NavBar />
            <div className='prodContainer'>
                <h1 className='prodTitleDet'>{product.title}</h1>
                <h5 className='categTitle'>Categoría: {product.category}</h5>
                <img className='prodImageDet' src={product.image} alt={product.title} />
                <h5 className='priceDet'>${product.price}</h5>
                <p className='description'>{product.description}</p>
            </div>
        </>
    )
}