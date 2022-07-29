import { cartState } from "../assets/atom";
import { useRecoilState } from "recoil";

const CartList = () => {
  const [cartState, setCartState] = useRecoilState(cartState);
  return <div></div>;
};

export default CartList;
