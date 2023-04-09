import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import AppStyle from '@/styles/App.module.scss';
import { marketAtom, marketsAtom, marketsSelector } from '@/state/markets';
import { accessTokenAtom } from '@/state/accessToken';
import Loading from '@/components/Loading';

const Markets = () => {
  const [market, setMarket] = useRecoilState(marketAtom);
  const [markets, setMarkets] = useRecoilState(marketsAtom);
  const getMarkets = useRecoilValueLoadable(marketsSelector({}));
  const accessToken = useRecoilValue(accessTokenAtom);

  useEffect(() => {
    if (accessToken && getMarkets.state === 'hasValue') {
      setMarkets(getMarkets.contents);
      if (getMarkets.contents.includes('JP')) {
        setMarket('JP');
      }
    }
  }, [accessToken, getMarkets, setMarket, setMarkets]);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMarket(e.target.value);
  };

  return getMarkets.state === 'hasValue' ? (
    <select className={AppStyle.selector} name="" id="" onChange={changeHandler} value={market}>
      {markets?.length > 0 ? markets.map((item) => <option key={item}>{item}</option>) : ''}
    </select>
  ) : (
    <Loading />
  );
};

export default Markets;
