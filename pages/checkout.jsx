import Header from "../components/Header";
import React from "react";
import { ShoppingBagIcon, FaceFrownIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../lib/slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import {motion as m} from 'framer-motion'


const Checkout = () => {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  return (
    <>
      <Header />
      <main className="flex flex-col w-full px-6 py-12 mx-auto md:space-x-5 md:flex-row md:px-8 lg:px-10">
        <div>
          <div className="items-center justify-between w-full pb-4 border-b-2 border-gray-700 md:flex">
            {items.length === 0 ? (
              <h2 className="flex items-center space-x-4 text-4xl font-bold ">
                Your Basket is Empty{" "}
                <FaceFrownIcon className="h-10 mt-3 ml-4 text-accent_yellow" />
              </h2>
            ) : (
              <h2 className="flex items-center space-x-4 text-4xl font-bold ">
                Shopping Cart{" "}
                <ShoppingBagIcon className="h-10 ml-4 text-accent_yellow" />{" "}
              </h2>
            )}
            {items.length > 0 && (
              <p className="mt-4 text-xl md:mt-0">{items.length} Items</p>
            )}
          </div>
          <div className="rounded-md bg-accent">
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {items.length > 0 && (
          <div className="flex flex-col items-center p-10 mt-4 bg-gray-800 rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-white whitespace-nowrap">
              Subtotal ({items.length} items)
            </h2>
            <h3 className="text-xl font-bold">Total: <span className="font-medium">${total}</span> </h3>
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
      
              disabled={!session}
              className={`mt-4 p-2 text-sm font-bold text-white rounded-md bg-accent_yellow ${
                !session &&
                "bg-gradient-to-t cursor-not-allowed from-gray-300 to-gray-500 border-grey"
              }`}
            >
              {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
            </m.button>
          </div>
        )}
      </main>
    </>
  );
};

export default Checkout;
