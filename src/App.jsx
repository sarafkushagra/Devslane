import React, { useState, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListPage from './components/ItemsListPage';
import Details from './components/Details';
import CartPage from './components/CartPage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import LoginPage from './components/Authorization_Pages/LoginPage';
import SignUp from './components/Authorization_Pages/SignUp';
import ForgetPassword from './components/Authorization_Pages/ForgetPassword';


function App() {

  const path = window.location.pathname;
  const savedCartString = localStorage.getItem("myCart") || "{}";
  const savedData = JSON.parse(savedCartString);

  const [cart, setCart] = useState(savedData);

  const handleAddToCart = useCallback(function (productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }, [cart]);
  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("myCart", cartString);
  }

  const totalCount = useMemo(function () {
    return Object.keys(cart).reduce(function (previous, current) {
      return previous + cart[current];
    }, 0);
  }, [cart]);

  return (
    <div className='bg-stone-100 flex flex-col h-screen overflow-auto' >
      <Navbar totalCount={totalCount} />
      <div className='grow' >
        <Routes>
          <Route index element={<ItemListPage />} />
          <Route path='/details/:id' element={<Details onAddToCart={handleAddToCart} />} />
          <Route path='/cart' element={<CartPage cartData={savedData} updateCart={updateCart} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App