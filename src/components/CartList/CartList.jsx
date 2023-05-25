import {
  List,
  ListItem,
  Wrap,
  WrapForContent,
  Price,
  Image,
  Thumb,
  Title,
  Restaurant,
  Button,
  WrapForPrice,
  SumTitle,
  TotalForOrder,
  BtnsContainer
} from './CartList.styled';
import { BiMinus, BiPlus } from 'react-icons/bi';

export const CartList = ({ list, addToCartFnc, addMore, addLess }) => {
  function countTotalPrice() {
    let sum = 0;
    list.map(dish => {
      return (sum = sum + dish.price * dish.quantity);
    });
    return sum;
  }

  return (
    <Wrap>
      <List>
        {list !== null &&
          list.map(dish => {
            return (
              <ListItem key={dish._id}>
                <WrapForContent>
                  <Restaurant>{dish.shop}</Restaurant>
                  <Title>{dish.title}</Title>
                </WrapForContent>

                <Thumb>
                  <Image src={dish.image} alt={dish.title} />
                </Thumb>
                <Price>{dish.price} UAH </Price>
                <Button
                  type="button"
                  aria-label="remove cart"
                  onClick={() => addToCartFnc(dish)}
                >
                  Remove from cart
                </Button>
                <BtnsContainer>
                  <Button
                    type="button"
                    aria-label="less"
                    onClick={() => addLess(dish._id)}
                    disabled={dish.quantity === 1}
                  >
                    <BiMinus />
                  </Button>
                  {dish.quantity}
                  <Button
                    type="button"
                    aria-label="more"
                    onClick={() => addMore(dish._id)}
                  >
                    <BiPlus />
                  </Button>
                </BtnsContainer>
                <WrapForPrice>
                  <SumTitle>Total price :</SumTitle>
                  <Price>{dish.quantity * dish.price} UAH</Price>
                </WrapForPrice>
              </ListItem>
            );
          })}
      </List>
      <TotalForOrder>Total : {countTotalPrice()} UAH </TotalForOrder>
    </Wrap>
  );
};
