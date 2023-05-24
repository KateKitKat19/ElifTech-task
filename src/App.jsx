import { Routes, Route } from 'react-router-dom';
import { Shop } from 'pages/Shop/Shop';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Cart } from 'pages/Cart/Cart';
import { useState } from 'react';
// import { useEffect } from 'react';
export const App = () => {
  const [cart, setCart] = useState([]);

  function addToCart(dish) {
    const isInCart = cart.find(item => dish._id === item._id);
    isInCart
      ? setCart(prev => prev.filter(item => dish._id !== item._id))
      : setCart(prev => [...prev, dish]);
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<Shop addToCartFnc={addToCart} cart={cart} />}
        ></Route>
        <Route
          path="cart"
          element={<Cart cartList={cart} addToCartFnc={addToCart} />}
        ></Route>
        <Route path="*" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};
