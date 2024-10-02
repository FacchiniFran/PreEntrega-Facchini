import './ItemListContainer.css';
import ProductCard from './productCard';
import { useState, useEffect } from 'react';
import { getProducts } from '../productList';

export default function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    }, []);

    return (
        <>
            <section className>
                <h1 className='mainTitle'>{greeting}</h1>
                <div className='listContainer'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))}
                </div>
            </section>
        </>
    )
}