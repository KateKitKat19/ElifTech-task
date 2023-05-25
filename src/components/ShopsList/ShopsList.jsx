import { nanoid } from 'nanoid';
import { Wrap, List, ListItem } from './ShopsList.styled';
export const ShopsList = ({ list, selectShop, current }) => {
  return (
    <Wrap>
      <List>
        {list !== null &&
          list.map(shop => {
            return (
              <ListItem
                key={nanoid()}
                onClick={() => selectShop(shop)}
                isCurrent={current === shop}
              >
                {shop}
              </ListItem>
            );
          })}
      </List>
    </Wrap>
  );
};
