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
  return (
    <>
      {cartList !== null && cartList !== undefined && cartList.length > 0 ? (
        <>
          <CartList
            list={cartList}
            addToCartFnc={addToCartFnc}
            addMore={addMore}
            addLess={addLess}
          ></CartList>
          <OrderForm list={cartList} clearCart={clearCart}></OrderForm>
        </>
      ) : (
        <EmptyWrap>There is nothing in your cart yet!</EmptyWrap>
      )}
    </>
  );
};
