/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { IoIosCart } from "react-icons/io";
import { useRecoilState } from "recoil";
import { cartState } from "~/atoms/cartState";

const ProductCard = ({
  title,
  price,
  image,
  id,
}: {
  title: string;
  price: number;
  image: string;
  id: number;
}) => {
  const [cart, setCart] = useRecoilState(cartState);
  const cartItem = cart.find((item: { id: number }) => item.id === id);
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    if (isInCart) {
      const updatedCart = cart.map((item: { id: number; quantity: number }) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          id: id,
          title: title,
          price: price,
          image: image,
          quantity: 1,
        },
      ]);
    }
  };

  const handleRemoveFromCart = () => {
    if (!isInCart) return;
    if (cartItem.quantity > 1) {
      const updatedCart = cart.map((item: { id: number; quantity: number }) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((item: { id: number }) => item.id !== id);
      setCart(updatedCart);
    }
  };
  const randomDiscount = Math.floor(Math.random() * (50 - 10 + 1) + 10);

  const discountedPrice = price - (price * randomDiscount) / 100;
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img className="object-cover" src={image} alt="product image" />
        <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {randomDiscount}% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="ml-2 text-sm text-slate-900 line-through">
              ${discountedPrice.toPrecision(4)}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          {isInCart && cartItem.quantity >= 1 && (
            <button className="px-2 text-lg" onClick={handleRemoveFromCart}>
              -
            </button>
          )}
          <div
            className={`w-full rounded-md bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:cursor-pointer ${
              isInCart ? "border-l border-r" : ""
            }`}
            onClick={handleAddToCart}
          >
            {isInCart ? (
              <p className="text-lg">{cartItem.quantity}</p>
            ) : (
              <div className="flex items-center justify-evenly text-lg">
                <IoIosCart />
                <p>Add To Cart</p>
              </div>
            )}
          </div>
          {isInCart && cartItem.quantity >= 1 && (
            <button className="px-2 text-lg" onClick={handleAddToCart}>
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
