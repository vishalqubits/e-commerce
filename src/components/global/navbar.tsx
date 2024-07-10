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
