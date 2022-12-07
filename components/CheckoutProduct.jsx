import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../lib/slices/basketSlice";
import { motion as m } from "framer-motion";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <div className="mt-8">
        <div className="grid items-center grid-cols-5 p-4 border-b-2 border-gray-600">
          <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain"
            className="rounded-md"
          />
          <div className="col-span-3 p-5">
            <p className="text-lg font-bold text-white">{title}</p>
            <p className="pt-4 text-sm font-medium text-gray-400 line-clamp-3">
              {description}
            </p>
            <p className="pt-4 text-lg font-bold text-white">${price}</p>
          </div>
          <div className="flex flex-col justify-center space-y-3 md:space-x-4 md:items-center md:space-y-0 md:justify-end md:flex-row">
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addItemToBasket}
              className="p-2 text-sm font-bold text-white rounded-md bg-accent_yellow"
            >
              Add
            </m.button>
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              y
              onClick={removeItemFromBasket}
              className="p-2 font-bold text-white bg-red-600 rounded-md mxtext-sm"
            >
              Remove
            </m.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
