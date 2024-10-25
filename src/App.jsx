import './App.css';
import HomeView from './views/HomeView/HomeView.jsx';
import AboutView from './views/AboutView/AboutView.jsx';
import { CartProvider } from './context/CartContext.jsx'
import ProductView from './views/ProductView/ProductView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListProvider } from './context/ItemListContext.jsx';
import CheckoutView from './views/CheckoutView/CheckoutView.jsx';
import CategoriesView from './views/CategoriesView/CategoriesView.jsx';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <ItemListProvider>
          <CartProvider>
            <Routes>
              <Route exact path='/' element={<HomeView />} />
              <Route exact path='/categorias/:cat' element={<CategoriesView />} />
              <Route exact path='/acercaDe' element={<AboutView />} />
              <Route exact path='/producto/:id' element={<ProductView />} />
              <Route exact path='/checkout' element={<CheckoutView/>}/>
            </Routes>
          </CartProvider>
        </ItemListProvider>
      </BrowserRouter>
    </>
  )
}