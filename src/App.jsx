import { Routes, Route } from 'react-router-dom';
import { Shop } from 'pages/Shop/Shop';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Cart } from 'pages/Cart/Cart';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [cart, setCart] = useState([]);
  const [currentShop, setCurrentShop] = useState(null);

  useEffect(() => {
    const items = localStorage.getItem('cartList');
    try {
      const parsedItems = JSON.parse(items);
      if (items && items.length > 0) {
        setCart(parsedItems);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (cart && cart.length > 0) {
      localStorage.setItem('cartList', JSON.stringify(cart));
    }
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

  function checkIfPossibleToOrder() {
    if (cart && cart.length > 0) {
      const existingOrderShop = cart[0].shop;
      const res = currentShop === existingOrderShop ? true : false;

      return res;
    } else return true;
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Shop
              addToCartFnc={addToCart}
              cart={cart}
              currentShop={currentShop}
              setCurrentShop={setCurrentShop}
              checkIfPossibleToOrder={checkIfPossibleToOrder}
            />
          }
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
