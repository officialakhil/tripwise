import React from "react";
import logoBlackBlue from "../images/logoBlackBlue.svg";
import review from "../images/review.svg";
import love from "../images/love.svg";
import random from "../images/random.jpeg";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

function Navbar() {
  const { data: session, status } = useSession();

  const [loggedIn, setLoggedIn] = useState(session ? true : false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header
        aria-label="Site Header"
        className="border-b border-gray-100 bg-white text-black"
      >
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 ml-5 lg:ml-0">
            <a href="#" className="flex">
              <span className="sr-only">Logo</span>
              <span className="inline-block h-8 w-32 rounded-lg">
                <Image
                  src={logoBlackBlue}
                  alt="logo"
                  width={300}
                  height={200}
                />
              </span>
            </a>
          </div>

          <div className="flex flex-1  justify-end gap-8">
            <div className="flex items">
              <div className="flex items-center  border-gray-100">
                <span className="hidden sm:block">
                  <a
                    href="/account"
                    className="border-b-4 border-transparent p-6 hover:border-sky-500 flex items-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.288 6.793L6.69001 14.368L5.87401 18.114L9.59801 17.275L17.186 9.692L14.286 6.792L14.288 6.793ZM18.248 8.633L15.35 5.733L15.906 5.179C16.3345 4.75035 16.9139 4.50661 17.52 4.5C17.898 4.5 18.25 4.604 18.551 4.815L18.561 4.822L18.573 4.83C19.693 5.587 19.794 7.09 18.899 7.981L18.249 8.632L18.248 8.633ZM10.352 18.643L4.36201 19.993C4.34001 20 4.31901 20 4.29801 20C4.25368 20 4.20992 19.99 4.16994 19.9709C4.12996 19.9517 4.09477 19.9238 4.06696 19.8893C4.03915 19.8548 4.01942 19.8145 4.00922 19.7713C3.99902 19.7282 3.99861 19.6833 4.00801 19.64L5.31801 13.617L14.847 4.117C15.5567 3.40796 16.5169 3.00671 17.52 3C18.18 3 18.838 3.184 19.413 3.587C19.8513 3.87639 20.2196 4.25976 20.4911 4.70928C20.7627 5.15879 20.9307 5.66315 20.983 6.18573C21.0353 6.7083 20.9705 7.23596 20.7934 7.73037C20.6163 8.22478 20.3312 8.67352 19.959 9.044L10.352 18.643Z"
                        fill="black"
                      />
                    </svg>

                    <span className=" ml-2"> Review </span>
                  </a>
                </span>

                <span className="hidden sm:block">
                  <a
                    href="/search"
                    className="flex items-center border-b-4 border-transparent p-6 hover:border-sky-500"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.79801 5.786C4.86503 4.79799 6.26581 4.24939 7.72001 4.25C9.17501 4.25 10.577 4.798 11.642 5.786L11.647 5.791L11.988 6.113L12.32 5.796C13.3879 4.80512 14.7912 4.25496 16.248 4.256C17.706 4.256 19.11 4.806 20.176 5.796L20.18 5.8C21.273 6.832 21.779 8.124 21.749 9.462C21.719 10.785 21.171 12.105 20.249 13.247C19.365 14.343 17.399 16.19 15.702 17.725C14.6617 18.6653 13.6106 19.5937 12.549 20.51L12.48 20.569L11.991 20L12.481 20.569L11.995 20.985L11.507 20.573C8.79864 18.2802 6.21179 15.8475 3.75701 13.285L3.73601 13.264L3.71601 13.241C1.99101 11.126 1.51301 7.921 3.79601 5.788L3.79801 5.786ZM11.988 19.012C12.899 18.2214 13.8017 17.4213 14.696 16.612C16.416 15.056 18.286 13.292 19.081 12.306C19.838 11.367 20.229 10.358 20.249 9.429C20.269 8.517 19.936 7.634 19.152 6.893C18.3622 6.16097 17.3249 5.75448 16.248 5.755C15.1717 5.75419 14.1349 6.15993 13.345 6.891L11.995 8.183L10.62 6.883C9.83044 6.15373 8.79484 5.74913 7.72001 5.75C6.64457 5.74942 5.60853 6.15476 4.81901 6.885C3.31201 8.293 3.46601 10.544 4.86101 12.27C7.12545 14.6321 9.50395 16.8821 11.988 19.012Z"
                        fill="black"
                      />
                    </svg>

                    <span className="ml-2"> Trips </span>
                  </a>
                </span>

                <span>
                  {session ? (
                    // <a
                    //   href="/profile"
                    //   className="flex items-center border-b-4 border-transparent px-6"
                    // >
                    //   <Image
                    //     src={random}
                    //     alt="user"
                    //     width={50}
                    //     height={50}
                    //     className="h-10 w-10 rounded-full"
                    //   />
                    // </a>

                    // add dropdown menu here for profile and logout
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <Image
                            src={session.user.image}
                            alt="user"
                            width={50}
                            height={50}
                            className="h-10 w-10 rounded-full"
                          />
                        </button>
                      </div>
                      <div className={isOpen ? "block" : "hidden"}>
                        <div
                          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <div className="py-1" role="none">
                            <p
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              Hi {session.user.name}
                            </p>
                            <button
                              onClick={signOut}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="flex items-center border-b-4 border-transparent p-6 hover:border-sky-500"
                      onClick={() => signIn("google")}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6ZM12 12C10.346 12 9 10.654 9 9C9 7.346 10.346 6 12 6C13.654 6 15 7.346 15 9C15 10.654 13.654 12 12 12Z"
                          fill="black"
                        />
                      </svg>

                      <span className="ml-2"> Sign In </span>
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
