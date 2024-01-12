// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
import { type JsonValue } from "@prisma/client/runtime/library";
import { useRouter } from "next/router";
import React from "react";

const OrderList = ({
  order,
}: {
  order: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    products: JsonValue[];
    shippingDetail: JsonValue;
    userId: string;
  };
}) => {
  const router = useRouter();
  return (
    <tr
      onClick={() => void router.push(`/order/${order.id}`)}
      className="border-b bg-white hover:cursor-pointer hover:bg-gray-50 "
    >
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-black"
      >
        # {order.id}
      </th>

      <td className="px-6 py-4 text-black">
        $
        {order?.products
          ?.reduce(
            (acc: number, product: { price: number; quantity: number }) => {
              return acc + product.price * product.quantity;
            },
            0,
          )
          .toFixed(2)}
      </td>
    </tr>
  );
};

export default OrderList;
