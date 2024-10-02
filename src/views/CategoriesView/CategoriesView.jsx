import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar.jsx';
import { getCategory } from '../../productList.js';

export default function AboutView() {

    const [catList, setCatList] = useState([]);

    const { cat } = useParams();

    useEffect(() => {
        setCatList(getCategory(cat));
    }, []);

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