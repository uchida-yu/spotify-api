import { atom } from 'recoil';

export const accessTokenAtom = atom<string>({
  key: 'accessTokenAtom',
  default: '',
});

export default accessTokenAtom;
