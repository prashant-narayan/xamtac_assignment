import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const cartState = atom({
  key: "cartState",
  effects_UNSTABLE: [persistAtom],
  default: [] as CartState[],
});

type CartState = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};
