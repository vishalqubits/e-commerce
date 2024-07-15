"use client";

import { NavData } from "@/constants/global/navbar";
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
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="dark" onClick={() => setOpenModal(false)}>
            Submit
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
