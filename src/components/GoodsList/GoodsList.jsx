import { List, ListItem } from './GoodsList.styled';

export const GoodsList = ({ list, addToCartFnc, cart }) => {
  const isInCart = dish => cart.find(item => dish._id === item._id);
  return (
    <div>
      <List>
        {list !== null &&
          list.map(dish => {
            return (
              <ListItem key={dish._id}>
                <p>{dish.title}</p>
                <p>{dish.shop}</p>
                <img
                  src={dish.image}
                  alt={dish.title}
                  width="50"
                  height="50"
                ></img>
                <p>{dish.price}</p>
                <button
                  type="button"
                  aria-label="add to cart"
                  onClick={() => addToCartFnc(dish)}
                >
                  {isInCart(dish) !== undefined
                    ? 'Remove from cart'
                    : 'Add to cart'}
                </button>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
