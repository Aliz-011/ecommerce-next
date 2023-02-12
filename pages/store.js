import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Product from '../components/Product';

export default function Store({ products }) {
  const [colors, setColors] = useState([
    'red',
    'yellow',
    'blue',
    'amber',
    'gray',
    'black',
    'white',
    'orange',
    'indigo',
  ]);
  return (
    <div className="container mx-auto max-w-7xl">
      <Head>
        <title>Our Store - Alstore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-full mx-auto my-8">
          <h2>
            Home / <Link href="/store">Our Store</Link>
          </h2>
        </div>

        <div className="flex flex-row sm:flex-col gap-5 shadow-md w-full px-2">
          <div>
            <h2 className="font-semibold text-base mb-3">Shop by Categories</h2>
            <div className="flex flex-row sm:flex-col capitalize font-extralight">
              <Link href="#">watch</Link>
              <Link href="#">tv</Link>
              <Link href="#">camera</Link>
              <Link href="#">headphone</Link>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-3">Filter by</h2>
            <h2 className="font-semibold mb-2">Availability</h2>
            <div className="flex flex-row sm:flex-col capitalize font-extralight mb-3">
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <label htmlFor="inStock">In Stock (1)</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <label htmlFor="outOfStock">Out Of Stock</label>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Price</h2>
            <div className="flex flex-row capitalize font-extralight gap-2 mb-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  pattern="[0-9]+"
                  placeholder="From"
                  className="rounded w-full border px-2 py-1.5"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  pattern="[0-9]+"
                  placeholder="To"
                  className="rounded w-full border px-2 py-1.5"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Colors</h2>
            <div className="flex gap-2">
              {colors &&
                colors.map((color, index) => (
                  <div
                    className={`rounded-full w-10 h-7 bg-${color}-400`}
                    key={index}
                  />
                ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-3">Size</h2>
            <div className="flex flex-row sm:flex-col capitalize font-extralight mb-3">
              <div className="flex gap-2">
                <input type="checkbox" id="small" className="" />
                <label htmlFor="small">S (7)</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="medium" className="" />
                <label htmlFor="medium">M (4)</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="large" className="" />
                <label htmlFor="large">L (3)</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="xlarge" className="" />
                <label htmlFor="xlarge">XL (2)</label>
              </div>
            </div>
          </div>
        </div>

        {/* items list */}
        <div className="col-span-3">
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-5">
              <h2 className="font-semibold">Sort by:</h2>
              <select className="cursor-pointer">
                <option value="best-sell">Best Selling</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                <option value="desc">Cheapest - Expensive</option>
                <option value="desc">Expensive - Cheapest</option>
                <option value="desc">New - Old</option>
                <option value="desc">Old - New</option>
              </select>
            </div>

            <div className="flex items-center">
              <p className="font-semibold">110 Products</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Store.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:1000/api/v1/product');
  const data = await response.json();

  return {
    props: { products: data },
  };
}