import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar.jsx';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard.jsx';
import { ItemListContext } from '../../context/ItemListContext.jsx';

export default function AboutView() {

    const { cat } = useParams();
    const [catList, setCatlist] = useState([]);
    const [products] = useContext(ItemListContext);

    useEffect(() => {
        setCatlist(products.filter((product) => product.category === cat));
    }, [cat]);

    return (
        <>
            <NavBar />
            <div>
                {catList.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>
        </>
    )
}