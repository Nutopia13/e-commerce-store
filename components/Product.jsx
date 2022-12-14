import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../lib/slices/basketSlice";
import { motion as m } from "framer-motion";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
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

  return (
    <div className="z-30 flex flex-col h-full shadow-md bg-e_secondary">
      <div className="w-full overflow-hidden rounded-t-lg group aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={image}
          height={200}
          width={200}
          className="object-contain object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-3 border-t-2 border-gray-700">
        <h3 className="mt-4 font-semibold line-clamp-1 text-md">{title}</h3>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 mt-4 text-yellow-500" />
            ))}
        </div>
        <p className="mt-2 text-sm text-gray-400">{category}</p>
        <p className="mt-1 text-lg font-medium text-white">${price}</p>
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addItemToBasket}
          className="px-4 py-2 mt-5 font-bold rounded-md bg-accent_yellow"
        >
          Add to Basket
        </m.button>
      </div>
    </div>
  );
};

export default Product;
