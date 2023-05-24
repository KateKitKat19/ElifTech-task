import { CartList } from 'components/CartList/CartList';

export const Cart = ({ cartList, addToCartFnc }) => {
  return (
    <>
      {cartList !== null && cartList !== undefined && (
        <CartList list={cartList} addToCartFnc={addToCartFnc}></CartList>
      )}
    </>
  );
};
