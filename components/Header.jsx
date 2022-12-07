import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../lib/slices/basketSlice";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* Top Bar */}
      <div className="sticky flex items-center flex-grow px-6 py-4 bg-e_primary">
        <div className="flex items-center flex-grow mr-4 text-white sm:flex-grow-0">
          <Link href="/">
            <h1 className="hidden py-2 text-2xl font-bold text- bg-accent_yellow md:inline-block md:px-4 rounded-xl">
              Open Store
            </h1>
            <h1 className="px-4 py-2 text-2xl font-bold bg-black rounded-md md:hidden">
              OS
            </h1>
          </Link>
        </div>
        {/* Search Bar */}
        <div className="items-center flex-grow hidden h-10 rounded-md cursor-pointer bg-e_secondary hover:bg-accent_yellow sm:flex ">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow flex-shrink w-6 h-full p-2 px-2 text-black bg-white focus:outline-none rounded-l-md"
          />
          <MagnifyingGlassIcon color="white" className="h-12 p-3" />
        </div>
        {/* Right */}
        <div className="flex items-center mx-6 space-x-6 text-xs text-white cu whitespace-nowrap">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="pr-3 border-r link"
          >
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-small ">Account and Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-small ">& Orders</p>
          </div>

          <Link href="checkout">
            <div className="relative flex items-center link">
              <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center rounded-full bg-accent_yellow">
                {items.length}
              </span>
              <ShoppingBagIcon className="h-10" />
            </div>
          </Link>
        </div>
      </div>

      {/* End Top Bar */}

      {/* Bottom Bar */}
      <div className="flex items-center p-2 pl-6 space-x-3 text-sm font-bold text-white bg-accent">
        <p className="flex items-center hover:text-accent_yellow link">
          <Bars3Icon color="white" className="h-6 mr-1 " />
          All
        </p>
        <p className="link hover:text-accent_yellow">Today's Deals</p>
        <p className="link hover:text-accent_yellow">Black Friday</p>
        <p className="hidden hover:text-accent_yellow link lg:inline-block">
          Electronics
        </p>
        <p className="hidden hover:text-accent_yellow link lg:inline-block">
          Fun
        </p>
        <p className="hidden hover:text-accent_yellow link lg:inline-block">
          Travel
        </p>
        <p className="hidden hover:text-accent_yellow link lg:inline-block">
          Health & Personal Care
        </p>
      </div>
    </header>
  );
};

export default Header;
