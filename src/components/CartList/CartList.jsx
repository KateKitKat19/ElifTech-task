import { List, ListItem } from './CartList.styled';

export const CartList = ({ list, addToCartFnc, addMore, addLess }) => {
  function countTotalPrice() {
    let sum = 0;
    list.map(dish => {
      return (sum = sum + dish.price * dish.quantity);
    });
    return sum;
  }


  return (
    <div>
      <List>
        {list !== null &&
          list.map(dish => {
            return (
              <ListItem key={dish._id}>
                <p>{dish.title}</p>
                <p>{dish.shop}</p>
                <img src={dish.image} alt={dish.title} width="50" height="50" />
                <p>{dish.price}</p>
                <button
                  type="button"
                  aria-label="remove cart"
                  onClick={() => addToCartFnc(dish)}
                >
                  Remove from cart
                </button>
                <button
                  type="button"
                  aria-label="less"
                  onClick={() => addLess(dish._id)}
                  disabled={dish.quantity === 1}
                >
                  {' '}
                  -{' '}
                </button>
                {dish.quantity}
                <button
                  type="button"
                  aria-label="more"
                  onClick={() => addMore(dish._id)}
                >
                  {' '}
                  +{' '}
                </button>
                <div>
                  <h3>Total price :</h3>
                  <span>{dish.quantity * dish.price}</span>
                </div>
              </ListItem>
            );
          })}
      </List>
      <h3>Total : {countTotalPrice()}</h3>
    </div>
  );
};
