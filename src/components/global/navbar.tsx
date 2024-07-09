"use client";

import { NavData } from "@/constants/global/navbar";
import { Button, Navbar } from "flowbite-react";

export default function NavigationBar() {
  return (
    <div className="page-padding h-36 w-full flex items-center dark:bg-button border-b border-button dark:border-text">
      <div className="w-full">
        <Navbar fluid rounded className="dark:bg-button">
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-text">
              Exclusive
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 bg-secondary">
            <div>
              <form className="flex items-center max-w-sm mx-auto">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-text2 dark:text-text focus:!ring-text2 focus:!border-text2 text-sm rounded-lg ring-text2 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-text dark:focus:ring-text dark:focus:border-text"
                    placeholder="What are you looking for ?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-text2 dark:text-text rounded-lg border focus:ring-4 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" className="dark:text-text">
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className="dark:text-text">
              Contact
            </Navbar.Link>
            <Navbar.Link href="#" className="dark:text-text">
              About
            </Navbar.Link>
            <Navbar.Link href="#" className="dark:text-text">
              Sign Up
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
