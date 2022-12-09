import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Header from "../components/Header";
import { motion as m } from "framer-motion";
import Link from "next/link";

const Success = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full h-screen max-w-6xl px-10 mx-auto mt-10 text-left">
        <div className="flex items-center space-x-4">
          <div className="">
            <CheckCircleIcon className="h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold">
            Thank you, your order has been confirmed!
          </h1>
        </div>
        <p className="max-w-2xl my-6 text-gray-400">
          Thank you for your purchase from our e-commerce store. We hope that
          you are satisfied with your purchase. If you have any questions or
          concerns, please don't hesitate to contact us.
        </p>
        <Link href="orders">
          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-white rounded-md bg-accent_yellow"
          >
            Go to My Orders
          </m.button>
        </Link>
      </main>
    </>
  );
};

export default Success;
