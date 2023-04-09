import React, { useEffect } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import AppStyle from '@/styles/App.module.scss';
import { accessTokenAtom, accessTokenSelector } from '@/state/accessToken';
import List from '@/components/List';
import Markets from '@/components/Markets';
import Loading from '@/components/Loading';

function App() {
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const getAccessToken = useRecoilValueLoadable(accessTokenSelector({}));

  useEffect(() => {
    if (getAccessToken.state === 'hasValue') {
      setAccessToken(getAccessToken.contents);
    }
  }, [getAccessToken, setAccessToken]);

  return (
    <div className={AppStyle.App}>
      {getAccessToken.state === 'hasValue' ? (
        <>
          <Markets />
          <List />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
