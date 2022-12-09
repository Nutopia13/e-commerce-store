import React from "react";
import moment from "moment";
import Image from "next/image";
const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative shadow-md">
      <div className="flex items-center p-5 space-x-10 text-sm text-gray-600 bg-gray-100 rounded-t-md">
        <div>
          <p className="text-xs font-bold">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            ${amount}- Next Day Delivery
            <span className="ml-2">${amountShipping}</span>
          </p>
        </div>

        <p className="absolute w-40 text-xs truncate top-2 right-2 lg:w-72 whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="relative flex flex-row space-x-5 overflow-x-scroll bg-accent ">
        {images.map((image, i) => (
          <div key={i} className="py-5 ml-4 ">
            <img src={image} className="object-contain h-20 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
