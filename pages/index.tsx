import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { getSession } from "next-auth/react";
import ProductFeed from "../components/ProductFeed";

const Home: NextPage = ({ products }: any) => {
  return (
    <div>
      <Head>
        <title>E-Commerce Store</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
