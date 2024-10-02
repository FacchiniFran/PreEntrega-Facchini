import './App.css';
import HomeView from './views/HomeView/HomeView.jsx';
import CategoriesView from './views/CategoriesView/CategoriesView.jsx';
import AboutView from './views/AboutView/AboutView.jsx';
import ProductView from './views/ProductView/ProductView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/categorias/:categoria' element={<CategoriesView />} />
          <Route exact path='/acercaDe' element={<AboutView />} />
          <Route exact path='/producto/:id' element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}