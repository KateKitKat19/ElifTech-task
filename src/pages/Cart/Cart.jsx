import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

import { CartList } from 'components/CartList/CartList';
import { OrderForm } from 'components/Form/Form';
import { EmptyWrap } from './Cart.styled';

export const Cart = ({
  cartList,
  addToCartFnc,
  addMore,
  addLess,
  clearCart,
}) => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  function checkCart() {
    return cartList !== null && cartList !== undefined && cartList.length > 0;
  }
  return (
    <>
      {checkCart() && (
        <>
          <CartList
            list={cartList}
            addToCartFnc={addToCartFnc}
            addMore={addMore}
            addLess={addLess}
          ></CartList>
          <OrderForm list={cartList} clearCart={clearCart}></OrderForm>
        </>
      )}
      {cartList && cartList.length === 0 && (
        <EmptyWrap>There is nothing in your cart yet!</EmptyWrap>
      )}
      {isLoading && !error && <Loader />}
    </>
  );
};
