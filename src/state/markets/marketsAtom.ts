import { atom } from 'recoil';

export const marketsAtom = atom<string[]>({
  key: 'marketsAtom',
  default: [],
});

export default marketsAtom;
