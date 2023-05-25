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
