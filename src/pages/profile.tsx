import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import OrderList from "~/components/OrderList";
import Spinner from "~/components/Spinner";
import { api } from "~/utils/api";

const LatestOrders = () => {
  const { data: allOrders, isLoading } = api.order.getAllOrders.useQuery();
  return (
    <>
      <Navbar />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm rtl:text-right">
          <thead className="bg-slate-700 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order) => (
              // @ts-expect-error JSON Value
              <OrderList key={order.id} order={order} />
            ))}
            {allOrders?.length === 0 && (
              <tr className="border-b bg-white hover:cursor-pointer hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-black"
                >
                  No orders yet
                </th>
              </tr>
            )}
            {isLoading && <Spinner />}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default LatestOrders;
