import { selectorFamily } from 'recoil';
import { accessTokenAtom } from '@/state/accessToken';
import { marketAtom } from '@/state/markets';
import SpotifyService from '@/infrastructure/service/SpotifyService';

export const newReleasesSelector = selectorFamily({
  key: 'newReleasesSelector',
  get:
    () =>
    async ({ get }) => {
      const accessToken = get(accessTokenAtom);
      const market = get(marketAtom);
      let response = null;
      if (accessToken && market) {
        response = await SpotifyService.getNewRelease(market, accessToken);
      }
      return response;
    },
});

export default newReleasesSelector;
