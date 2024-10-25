import { getProducts } from '../firebase/firebase';
import { createContext, useState, useEffect } from 'react';

export const ItemListContext = createContext(false);

export function ItemListProvider({ children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <ItemListContext.Provider value={[products, setProducts]}>
            {children}
        </ItemListContext.Provider>
    );
}