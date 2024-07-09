"use client";

import { DarkThemeToggle, Dropdown, Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  dropdown: {
    arrowIcon: "ml-2",
  },
};

const Header = () => {
  return (
    <div className="page-padding width-control flex items-center justify-evenly bg-button dark:bg-primary dark:text-button h-12 text-text text-sm">
      <div className="w-full flex justify-end">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold underline px-4">ShopNow</span>
      </div>
      <div className="flex justify-end w-1/2">
        <button
          disabled={true}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-text dark:text-text2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          English{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
      <div>
        <DarkThemeToggle />
      </div>
    </div>
  );
};

export default Header;
