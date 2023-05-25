import {
  List,
  ListItem,
  WrapForContent,
  Title,
  Image,
  Thumb,
  Price,
  Button,
} from './GoodsList.styled';

export const GoodsList = ({ list, addToCartFnc, cart }) => {
  const isInCart = dish => cart.find(item => dish._id === item._id);
  function checkIfPossibleToOrder(dish) {
    if (cart && cart.length > 0) {
      const existingOrder = cart[0].shop;
      return dish.shop === existingOrder ? false : true;
    }
  }
  return (
    <div>
      <List>
        {list !== null &&
          list.map(dish => {
            return (
              <ListItem key={dish._id}>
                <WrapForContent>
                  <Title>{dish.title}</Title>
                </WrapForContent>
                <Thumb>
                  <Image src={dish.image} alt={dish.title}></Image>
                </Thumb>

                <Price>{dish.price} UAH</Price>
                <Button
                  type="button"
                  aria-label="add to cart"
                  onClick={() => addToCartFnc(dish)}
                  disabled={checkIfPossibleToOrder(dish)}
                >
                  {isInCart(dish) !== undefined
                    ? 'Remove from cart'
                    : 'Add to cart'}
                </Button>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
