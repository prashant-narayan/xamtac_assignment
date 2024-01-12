/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Fragment, useState } from "react";
import { IoIosCart } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { Dialog, Transition } from "@headlessui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "~/atoms/cartState";
import { useCreateOrder } from "~/hooks/order";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartStateFromStorage = useRecoilValue(cartState);
  const [cart, setCart] = useRecoilState(cartState);

  const { status, data } = useSession();

  const handleRemoveAllFromCart = (id: number) => {
    const cartItem = cart.find((item: { id: number }) => item.id === id);
    const isInCart = !!cartItem;
    if (!isInCart) return;
    const updatedCart = cart.filter((item: { id: number }) => item.id !== id);
    setCart(updatedCart);
  };
  const { orderPayment } = useCreateOrder();
  const router = useRouter();
  const handlePayment = async () => {
    if (status !== "authenticated") {
      void router.push("/log-in");
      return;
    }
    await orderPayment({
      cart: cartStateFromStorage,
    });
  };
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl"
              href="/"
            >
              Prashant
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex justify-center gap-3">
            <button>
              {status === "authenticated" ? (
                <div className="flex items-center justify-center gap-2">
                  {data?.user?.image && (
                    <img
                      onClick={() => void router.push("/profile")}
                      className="h-10 w-10 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
                      src={data?.user?.image}
                      alt="Bordered avatar"
                    ></img>
                  )}
                  <IoIosLogOut onClick={() => signOut()} />
                </div>
              ) : (
                <CgProfile onClick={() => void router.push("/log-in")} />
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="relative rounded-full border-2 border-transparent px-1 py-4 text-xl"
              aria-label="Cart"
            >
              <IoIosCart />
              <span className="absolute inset-0 -mr-7 object-right-top">
                <div className="py-0.2 inline-flex items-center rounded-full border-2 border-white bg-slate-700 px-1 text-xs font-semibold leading-4 text-white">
                  {cart.length}
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <FaXmark className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map(
                                (product: {
                                  id: number;
                                  title: string;
                                  price: number;
                                  image: string;
                                  quantity: number;
                                }) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.image}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={`/product/${product.id}`}>
                                              {product.title}
                                            </a>
                                          </h3>
                                          <p className="ml-4">
                                            ${product.price}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Qty {product.quantity}
                                        </p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-slate-700 hover:text-slate-500"
                                            onClick={() =>
                                              handleRemoveAllFromCart(
                                                product.id,
                                              )
                                            }
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>
                            $
                            {cart
                              ?.reduce(
                                (
                                  acc: number,
                                  product: { price: number; quantity: number },
                                ) => {
                                  return acc + product.price * product.quantity;
                                },
                                0,
                              )
                              .toPrecision(3)}
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <button
                            onClick={handlePayment}
                            className="flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-700"
                          >
                            Checkout
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="font-medium text-slate-700 hover:text-slate-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </nav>
  );
};

export default Navbar;
