/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import SingleOrderCard from "~/components/SingleOrderCard";
import { api } from "~/utils/api";

const SingleOrder = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: singleOrder } = api.order.getSingleOrder.useQuery(
    {
      id: id as string,
    },
    {
      retryOnMount: true,
    },
  );
  const { data: user } = useSession();
  return (
    <>
      <Navbar />
      <div className="px-4 py-14 2xl:container md:px-6 2xl:mx-auto 2xl:px-20">
        <div className="item-start flex flex-col justify-start space-y-2">
          <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9 ">
            Order #{singleOrder?.id}
          </h1>
        </div>
        <div className="jusitfy-center mt-10 flex w-full flex-col items-stretch space-y-4 md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
          <div className="flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex w-full flex-col items-start justify-start bg-gray-50 px-4 py-4 md:p-6 md:py-6 xl:p-8">
              <p className="text-lg font-semibold leading-6 text-gray-800 md:text-xl xl:leading-5 ">
                Customer Cart
              </p>
              {singleOrder?.products?.map(
                //@ts-expect-error JSON Value
                (product: {
                  id: number;
                  price: number;
                  quantity: number;
                  title: string;
                  image: string;
                }) => <SingleOrderCard key={product.id} product={product} />,
              )}
            </div>
            <div className="flex w-full flex-col items-stretch justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0 xl:space-x-8">
              <div className="flex w-full flex-col space-y-6 bg-gray-50 px-4 py-6 md:p-6 xl:p-8 ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                  Summary
                </h3>
                <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-gray-200 pb-4">
                  <div className="flex w-full justify-between">
                    <p className="text-base leading-4 text-gray-800 ">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600 ">
                      $
                      {singleOrder?.products
                        ?.reduce(
                          (
                            acc: number,
                            product: { price: number; quantity: number },
                          ) => {
                            return acc + product.price * product.quantity;
                          },
                          0,
                        )
                        .toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-base font-semibold leading-4 text-gray-800 ">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600 ">
                    $
                    {singleOrder?.products
                      ?.reduce(
                        (
                          acc: number,
                          product: { price: number; quantity: number },
                        ) => {
                          return acc + product.price * product.quantity;
                        },
                        0,
                      )
                      .toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between bg-gray-50 px-4 py-6 md:items-start md:p-6 xl:w-96 xl:p-8 ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
              Customer
            </h3>
            <div className="flex h-full w-full flex-col items-stretch justify-start md:flex-row md:space-x-6 lg:space-x-8 xl:flex-col xl:space-x-0">
              <div className="flex flex-shrink-0 flex-col items-start justify-start">
                <div className="flex w-full items-center justify-center space-x-4 border-b border-gray-200 py-8 md:justify-start">
                  {user?.user?.image && (
                    <img src={user?.user?.image} alt="avatar" />
                  )}
                  <div className="flex flex-col items-start justify-start space-y-2">
                    <p className="text-left text-base font-semibold leading-4 text-gray-800 ">
                      {user?.user?.name}
                    </p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center space-x-4 border-b border-gray-200 py-4 text-gray-800 md:justify-start ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 ">
                    {user?.user?.email}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col items-stretch justify-between md:mt-0 xl:h-full">
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-start md:space-x-6 md:space-y-0 lg:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-12">
                  <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:justify-start xl:mt-8">
                    <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left ">
                      Shipping Address
                    </p>
                    <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48 ">
                      {`${singleOrder?.shippingDetail?.address?.line1} ${singleOrder?.shippingDetail?.address?.line2}, ${singleOrder?.shippingDetail?.address?.city}, ${singleOrder?.shippingDetail?.address?.state}, ${singleOrder?.shippingDetail?.address?.country}, ${singleOrder?.shippingDetail?.address?.postal_code}`}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:justify-start">
                    <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left ">
                      Billing Address
                    </p>
                    <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48 ">
                      {`${singleOrder?.shippingDetail?.address?.line1} ${singleOrder?.shippingDetail?.address?.line2}, ${singleOrder?.shippingDetail?.address?.city}, ${singleOrder?.shippingDetail?.address?.state}, ${singleOrder?.shippingDetail?.address?.country}, ${singleOrder?.shippingDetail?.address?.postal_code}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleOrder;
