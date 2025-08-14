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
import AuthRoute from './components/Authorization_Pages/AuthRoute';
import UserRoute from './components/Authorization_Pages/UserRoute';


function App() {

  const path = window.location.pathname;
  const savedCartString = localStorage.getItem("myCart") || "{}";
  const savedData = JSON.parse(savedCartString);

  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();

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
      <Navbar user= {user} setUser={setUser} totalCount={totalCount} />
      <div className='grow' >
        <Routes>

          <Route index element={<UserRoute user={user}><ItemListPage /></UserRoute>} />
          <Route path='/details/:id' element={<UserRoute user={user}><Details onAddToCart={handleAddToCart} /></UserRoute>} />
          <Route path='/cart' element={<UserRoute user={user}><CartPage cartData={savedData} updateCart={updateCart} /></UserRoute>} />
          <Route path="*" element={<AuthRoute user={user}><NotFound /></AuthRoute>} />
          <Route path="/login" element={<AuthRoute user={user}><LoginPage setUser={setUser} /></AuthRoute>} />
          <Route path="/signup" element={<AuthRoute user={user}><SignUp /></AuthRoute>} />
          <Route path="/forget-password" element={<AuthRoute user={user}><ForgetPassword /></AuthRoute>} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App