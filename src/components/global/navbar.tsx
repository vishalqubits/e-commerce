"use client";

import { NavData } from "@/constants/global/navbar";
import AddProductForm from "@/forms/addProduct";
import { Button, Modal, Navbar } from "flowbite-react";
import { useState } from "react";

export default function NavigationBar() {
  const [openModal, setOpenModal] = useState(false);

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
            <Button
              onClick={() => setOpenModal(true)}
              className="!bg-text2 dark:!bg-white dark:!text-text2"
            >
              Add new item
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {NavData.map((item) => (
              <Navbar.Link
                href={item.link}
                className="dark:text-text hover:underline hover:scale-105"
                key={item.id}
              >
                {item.name}
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="!bg-opacity-50"
      >
        <Modal.Header>Add new item to store</Modal.Header>
        <Modal.Body>
          <AddProductForm />
        </Modal.Body>
      </Modal>
    </div>
  );
}
