import { CartList } from 'components/CartList/CartList';
import { OrderForm } from 'components/Form/Form';

export const Cart = ({ cartList, addToCartFnc, addMore, addLess }) => {
  return (
    <>
      {cartList !== null && cartList !== undefined && (
        <>
          <CartList
            list={cartList}
            addToCartFnc={addToCartFnc}
            addMore={addMore}
            addLess={addLess}
          ></CartList>
          <OrderForm list={cartList}></OrderForm>
        </>
      )}
    </>
  );
};
