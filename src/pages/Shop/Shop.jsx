import { selectGoods, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGoods } from 'redux/operations';
import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ShopsList } from 'components/ShopsList/ShopsList';
import { GoodsList } from 'components/GoodsList/GoodsList';
import { Wrap } from './Shop.styled';

import _ from 'lodash';

export const Shop = ({
  addToCartFnc,
  cart,
  currentShop,
  setCurrentShop,
  checkIfPossibleToOrder,
}) => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const [shopsList, setShopsList] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch]);

  useEffect(() => {
    if (goods === null || goods === undefined) {
      return;
    }
    const shopsList = goods.map(item => item.shop);
    const sorted = _.sortedUniq(shopsList);
    setShopsList(sorted);
  }, [goods]);

  useEffect(() => {
    if (goods === null || goods === undefined) {
      return;
    }
    const sortedGoodsFromList = goods.filter(item => item.shop === currentShop);
    setCurrentItems && setCurrentItems(sortedGoodsFromList);
  }, [currentShop, goods]);

  useEffect(() => {
    setCurrentShop && setCurrentShop(shopsList !== null && shopsList[0]);
  }, [shopsList, setCurrentShop]);

  function checkTheGoods() {
    return goods !== null && goods !== undefined;
  }

  return (
    <Wrap>
      {isLoading && !error && <Loader />}
      {checkTheGoods() === true && (
        <>
          <ShopsList
            list={shopsList}
            selectShop={setCurrentShop}
            current={currentShop}
          ></ShopsList>
          <GoodsList
            list={currentItems}
            addToCartFnc={addToCartFnc}
            cart={cart}
            checkIfPossibleToOrder={checkIfPossibleToOrder}
          ></GoodsList>
        </>
      )}
    </Wrap>
  );
};
