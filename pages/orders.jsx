import { useSession, signIn, getSession } from "next-auth/react";
import React from "react";
import Header from "../components/Header";
import { motion as m } from "framer-motion";
import moment from "moment";
import Order from "../components/Order";
import { db } from "../lib/firebase";

const Orders = ({ orders }) => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <main className="max-w-screen-lg p-10 mx-auto mt-6">
        <h1 className="pb-2 mb-2 text-3xl font-bold border-b-2 border-accent_yellow">
          Your Orders
        </h1>
        {session ? (
          <h2> {orders.length} Orders</h2>
        ) : (
          <m.button
            onClick={() => signIn()}
            className="px-4 py-2 mt-5 font-bold rounded-md bg-accent_yellow"
          >
            Please Sign In to see your orders
          </m.button>
        )}
        <div className="mt-5 space-y-5">
          {orders?.map((order) => (
            <Order
              key={order.id}
              id={order.id}
              amount={order.amount}
              amountShipping={order.amount_shipping}
              items={order.items}
              timestamp={order.timestamp}
              images={order.images}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  //Firebase DB
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  //Stripe Orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amount_shipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: await stripe.checkout.sessions.listLineItems(order.id, {
        limit: 100,
      }),
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
