"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "./LogoNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  //console.log(session);

  return (
    <nav className="bg-neutral-100 dark:bg-slate-800 py-2">
      <div className="w-[100%] min-h-[8vh] flex items-center">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="flex justify-start">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo width={150} />
            </Link>
          </div>
          <div className="flex justify-end lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="lg:flex justify-end hidden">
            {session ? (
              <div className="flex gap-2 items-center w-full justify-end">
                <Link
                  href="/productos"
                  className="block w-full px-2 py-1 text-neutral-800 dark:text-white hover:bg-pink-100 hover:rounded dark:hover:bg-gray-600 dark:hover:text-white flex-grow"
                >
                  Productos
                </Link>
                <div className="flex items-center justify-between text-neutral-800 dark:text-white hover:bg-pink-100 hover:rounded dark:hover:bg-gray-600 dark:hover:text-white mx-auto px-2 py-1">
                  <button
                    className="text-nowrap mr-1"
                    onClick={async () => {
                      await signOut({
                        callbackUrl: "/",
                      });
                    }}
                  >
                    Cerrar Sesión
                  </button>
                  <FaArrowRightFromBracket />
                </div>
              </div>
            ) : (
              <div className="flex gap-2 items-center px-2 py-1 bg-pink-600 rounded hover:bg-pink-700 hover:rounded dark:hover:bg-pink-500 dark:hover:text-white hover:cursor-pointer">
                <button
                  className="w-full"
                  onClick={() => {
                    signIn("google");
                  }}
                >
                  Login
                </button>
                <FaArrowRightFromBracket />
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div
            id="dropdownInformation"
            className="min-w-120 md:min-w-60 w-max z-10 top-16 right-2 md:right-2 mt-1 absolute bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 p-2"
          >
            <div className="flex items-center justify-around w-full">
              {session ? (
                <div className="flex flex-col gap-2 w-full">
                  <Link
                    href="/liquidaciones"
                    className="block w-full px-2 py-1 hover:bg-gray-100 hover:rounded dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Liquidaciones
                  </Link>
                  <button
                    className="flex items-center justify-between w-full px-2 py-1 hover:bg-gray-100 hover:rounded dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={async () => {
                      setIsOpen(!isOpen);
                      await signOut({
                        callbackUrl: "/",
                      });
                    }}
                  >
                    Cerrar Sesión <FaArrowRightFromBracket />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 w-full">
                  <button
                    className="flex items-center justify-between w-full px-2 py-1 hover:bg-gray-100 hover:rounded dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      signIn("google");
                    }}
                  >
                    Login <FaArrowRightFromBracket />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
