import './ItemListContainer.css';
import { useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { ItemListContext } from '../context/ItemListContext.jsx';

export default function ItemListContainer({ greeting }) {

    const [products] = useContext(ItemListContext);

    return (
        <>
            <section>
                <h1 className='mainTitle'>{greeting}</h1>
                {<div className='listContainer'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))}
                </div>}
            </section>
        </>
    )
}