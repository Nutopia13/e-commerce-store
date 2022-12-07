import Image from "next/image";
import React from "react";
import Product from "./Product";
import Banner from "../assets/NewArrival.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
const ProductFeed = ({ products }) => {
  return (
    <div className="max-w-2xl px-4 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="flex items-center justify-between w-full text-6xl font-extrabold tracking-tight text-white lg:text-7xl sm:text-4xl">
        Featured. <ArrowRightIcon className="h-10 cursor-pointer hover:text-accent_yellow" />
      </h2>
      <div className="grid grid-flow-row-dense mx-auto mt-8 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
        <Image
          src={Banner}
          objectFit="contain"
          className="w-full md:col-span-full"
        />

      </div>
      <h2 className="flex items-center justify-between mt-12 font-extrabold tracking-tight text-white tet-6xl justify-c ju lg:text-7xl sm:text-4xl">
       Jewelry.  <ArrowRightIcon className="h-10 cursor-pointer hover:text-accent_yellow" />
      </h2>
        <div className="grid grid-flow-row-dense mx-auto mt-8 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products
            .slice(5, 8)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        <h2 className="flex items-center justify-between mt-12 font-extrabold tracking-tight text-white tet-6xl justify-c ju lg:text-7xl sm:text-4xl">
       Electronics.  <ArrowRightIcon className="h-10 cursor-pointer hover:text-accent_yellow" />
      </h2>
        <div className="grid grid-flow-row-dense mx-auto mt-8 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products
            .slice(8, 13)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
    </div>
  );
};

export default ProductFeed;
