/* eslint-disable camelcase */
import { selectorFamily } from 'recoil';
import SpotifyService from '@/infrastructure/service/SpotifyService';

export const accessTokenSelector = selectorFamily({
  key: 'accessTokenSelector',
  get: () => async () => {
    const { access_token } = await SpotifyService.getAccessToken();
    return access_token;
  },
});

export default accessTokenSelector;
