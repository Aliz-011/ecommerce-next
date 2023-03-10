import React, { Fragment } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdSearch,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

const Header = () => {
  const links = [
    { href: '/menswear', label: 'menswear' },
    { href: '/womenswear', label: 'womenswear' },
    { href: '/elektronik', label: 'elektronik' },
  ];

  const logout = async () => {
    await fetch('http://localhost:1000/api/v1/auth/logout');
    localStorage.removeItem('user');
  };

  return (
    <header>
      <div className="py-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-3">
            <h3 className="capitalize">free shipping over Rp 300.000</h3>
            <div className="flex justify-between items-center gap-8">
              <p className="border-r border-gray-600 pr-6">
                Hotline:{' '}
                <a
                  href="tel:085254354689"
                  className="text-blue-400 hover:underline"
                >
                  +6285254354689
                </a>
              </p>
              <p className="flex items-center">
                Indonesia <MdOutlineKeyboardArrowDown className="h-5 w-5" />
              </p>
              <p className="flex items-center">
                IDR
                <MdOutlineKeyboardArrowDown className="h-5 w-5" />
              </p>
            </div>
          </div>

          <nav className="flex justify-between items-center gap-12 pt-4">
            <Link href="/" className="text-3xl">
              Logo
            </Link>

            <div className="w-1/2 mx-auto">
              <div className="flex items-center rounded bg-white">
                <input
                  type="text"
                  className="pl-3 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                  placeholder="Search Product Here..."
                />
                <button className="inline-flex items-center py-1 gap-1 px-4 text-white rounded-sm transition-all ease-out duration-150 bg-yellow-500 hover:bg-yellow-600 cursor-pointer">
                  <MdSearch className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xl">
              <div className="flex items-center gap-1 cursor-pointer">
                <AiOutlineHeart className="fill-red-700" />
                <Link href={'/favorite'}>Favorite</Link>
              </div>
              {/* {user ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  <AiOutlineUser />
                  <span onClick={logout}>Logout</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 cursor-pointer">
                  <AiOutlineUser />
                  <Link href={'/login'}>Login</Link>
                </div>
              )} */}
              <div className="flex items-center gap-1 cursor-pointer">
                <AiOutlineUser />
                <Link href={'/login'}>Login</Link>
              </div>
              <div className="flex items-center cursor-pointer">
                <MdOutlineShoppingCart className="fill-yellow-600" />
                <p className="text-sm">0</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="py-2 bg-slate-700 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center uppercase">
            <Menu
              as="div"
              className="relative inline-block py-1 border-r-2 border-gray-500 pr-4"
            >
              <Menu.Button className="relative z-10 flex items-center border-none p-0">
                <span className="mx-1">CATEGORIES</span>
                <MdOutlineKeyboardArrowDown className="h-5 w-5" />
              </Menu.Button>

              <Menu.Items className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md border shadow-xl dark:bg-gray-800">
                {links.map((link) => (
                  <Menu.Item key={link.href} as={Fragment}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
            <div className="flex items-center gap-8 ml-6">
              <Link href="/">Home</Link>
              <Link href="/store">Our Store</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
