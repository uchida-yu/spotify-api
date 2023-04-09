import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import AppStyle from '@/styles/App.module.scss';
import { listAtom, newReleasesSelector } from '@/state/list';
import { marketAtom } from '@/state/markets';
import { accessTokenAtom } from '@/state/accessToken';
import Loading from '@/components/Loading';

const List = () => {
  const accessToken = useRecoilValue(accessTokenAtom);
  const newReleases = useRecoilValueLoadable(newReleasesSelector({}));
  const market = useRecoilValue(marketAtom);

  const [list, setList] = useRecoilState(listAtom);
  useEffect(() => {
    if (accessToken && newReleases.state === 'hasValue') {
      setList(newReleases.contents);
    }
  }, [accessToken, market, newReleases, setList]);

  return newReleases.state === 'hasValue' ? (
    <div className={AppStyle.list}>
      {list?.albums?.items && list?.albums?.items.length > 0
        ? list?.albums.items.map((item) => (
            <a className={AppStyle.list__item} key={item.id} href={item.href} target="_blank" rel="noreferrer">
              <img className={AppStyle['list__item-img']} src={item.images[0]?.url} alt="" />
              <div className={AppStyle['list__item-info']}>
                {item.name}
                <div>{item.artists.map((artist) => artist.name).join('/')}</div>
              </div>
            </a>
          ))
        : ''}
    </div>
  ) : (
    <Loading />
  );
};

export default List;
