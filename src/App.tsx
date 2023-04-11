import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/footer/footer';
import { PropsType } from './AppContainer';
import CatalogContainer from './components/catalog/catalogContainer';
import ProductContainer from './components/product/productContainer';
import HeaderContainer from './components/header/headerContainer';
import BasketContainer from './components/basket/basketContainer';
import AdminContainer from './components/admin/adminContainer';

const App: React.FC<PropsType> = ({ initializeApp, initialized }) => {

  initializeApp();
  
  return (
    <div className="App">
      {initialized && <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<Navigate replace to={'/catalog'} />} />
          <Route path={'/catalog'} element={<CatalogContainer />} />
          <Route path={'/catalog/:barcode'} element={<ProductContainer />} />
          <Route path={'/basket'} element={<BasketContainer />} />
          <Route path={'/admin'} element={<AdminContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>}
    </div>
  );
}

export default App;
