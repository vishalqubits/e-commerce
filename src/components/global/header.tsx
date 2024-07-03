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
    <div className="width-control flex items-center justify-evenly bg-button dark:bg-primary dark:text-button h-12 text-text text-sm">
      <div className="w-full flex justify-end">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold underline px-4">ShopNow</span>
      </div>
      <div className="flex justify-end w-1/2">
        <Flowbite theme={{ theme: customTheme }}>
          <Dropdown label="English"></Dropdown>
        </Flowbite>
      </div>
      <div>
        <DarkThemeToggle />
      </div>
    </div>
  );
};

export default Header;
