/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import React, { useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { cartState } from "~/atoms/cartState";

const SuccessPage = () => {
  const [cart, setCart] = useRecoilState(cartState);
  useEffect(() => {
    console.log(cart);
    setCart([]);
  }, []);
  return (
    <div className="h-screen ">
      <div className="mx-auto bg-white  p-6">
        <div className="flex items-center justify-center text-6xl text-green-500">
          <FaCircleCheck />
        </div>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Done!
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <Link
              href="/"
              className="bg-slate-700 px-12 py-3 font-semibold text-white hover:bg-slate-500"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
