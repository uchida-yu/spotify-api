import { atom } from 'recoil';
import { NewReleasesResponse } from '@/infrastructure/service/SpotifyService';

export const listAtom = atom<NewReleasesResponse | null>({
  key: 'list',
  default: null,
});

export default listAtom;
