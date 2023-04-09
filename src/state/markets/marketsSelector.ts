import { selectorFamily } from 'recoil';
import { accessTokenAtom } from '@/state/accessToken';

export const marketsSelector = selectorFamily({
  key: 'marketsSelector',
  get:
    () =>
    async ({ get }) => {
      const accessToken = get(accessTokenAtom);
      let markets: string[] = [];
      if (accessToken) {
        await fetch('https://api.spotify.com/v1/markets', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            markets = data?.markets;
          })
          .catch((error) => console.error(error));
      }

      return markets;
    },
});

export default marketsSelector;
