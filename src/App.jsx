import { Routes, Route } from 'react-router-dom';
import { Shop } from 'pages/Shop/Shop';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Cart } from 'pages/Cart/Cart';
import { useState } from 'react';
import { useEffect } from 'react';
export const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cart));
  }, [cart]);

  function addToCart(dish) {
    const isInCart = cart.find(item => dish._id === item._id);
    isInCart
      ? setCart(prev => prev.filter(item => dish._id !== item._id))
      : setCart(prev => [...prev, { ...dish, quantity: 1 }]);
  }

  function addMore(id) {
    const updatedList = cart.map(item => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedList);
    localStorage.setItem('cartList', JSON.stringify(updatedList));
  }

  function addLess(id) {
    const updatedList = cart.map(item => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedList);
    localStorage.setItem('cartList', JSON.stringify(updatedList));
  }

  function clearCart() {
    setCart([]);
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
          element={
            <Cart
              cartList={cart}
              addToCartFnc={addToCart}
              addMore={addMore}
              addLess={addLess}
              clearCart={clearCart}
            />
          }
        ></Route>
        <Route path="*" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};
