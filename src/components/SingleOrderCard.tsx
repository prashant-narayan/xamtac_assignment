import React from "react";

const SingleOrderCard = ({
  product,
}: {
  product: {
    id: number;
    price: number;
    quantity: number;
    title: string;
    image: string;
  };
}) => {
  console.log(product);
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
      <div className="w-full pb-4 md:w-40 md:pb-8">
        <img className="w-full" src={product.image} alt="" />
      </div>
      <div className="flex w-full flex-col items-start justify-between space-y-4 border-b border-gray-200 pb-8 md:flex-row md:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-8">
          <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl ">
            {product.title}
          </h3>
        </div>
        <div className="flex w-full items-start justify-between space-x-8">
          <p className="text-base leading-6 xl:text-lg ">${product.price}</p>
          <p className="text-base leading-6 text-gray-800 xl:text-lg ">
            {product.quantity}
          </p>
          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg ">
            ${product.price * product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderCard;
