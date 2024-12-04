
import { Fragment, useContext, useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import About from './pages/About';
import Product from './pages/Product/Product';
import { HomeHooks } from './hooks/Home.jsx';
import Page404 from './pages/404/Page404.jsx';

function App() {

  const { cart, handleAddCart } = HomeHooks();

  return (

    <BrowserRouter>
      <Fragment>
        <Nav count={cart.reduce((result, product) => { return result + product.quantity; }, 0)}></Nav>
        <Routes>
          <Route exact path="/" element={<Home handleAddCart={handleAddCart} />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />
          <Route path='products/:id' element={<Product handleAddCart={handleAddCart} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer></Footer>
      </Fragment>
    </BrowserRouter>

  )
}

export default App
