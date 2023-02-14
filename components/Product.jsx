import Link from 'next/link';
import React from 'react';
import { HiOutlineHeart, HiStar } from 'react-icons/hi';

const Product = ({ product }) => {
  return (
    <Link
      href={`/product/${product._id}`}
      className="flex flex-col shadow-lg rounded-lg px-2 py-3"
    >
      <picture className="relative">
        <img
          src="/images/tab1.jpg"
          alt="img"
          className="h-40 w-full rounded-lg"
        />
        <HiOutlineHeart className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600" />
      </picture>

      <p className="text-orange-600 text-sm mb-4">{product.brand}</p>
      <p className="font-semibold">{product.title}</p>
      <div className="flex my-3">
        <HiStar className="fill-yellow-500 h-3 w-3" />
        <HiStar className="fill-yellow-500 h-3 w-3" />
        <HiStar className="fill-yellow-500 h-3 w-3" />
        <HiStar className="fill-yellow-500 h-3 w-3" />
        <HiStar className="fill-yellow-500 h-3 w-3" />
      </div>
      <p className="text-sm mt-auto">${product.price}</p>
    </Link>
  );
};

export default Product;
