import { Menu, MenuButton, MenuItem, MenuItems, MenuItemsProps } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import React, { Fragment } from "react";

interface DropdownProps {
  children: React.ReactNode;
  menuItem: DropdownMenuItem[];
  anchor?: MenuItemsProps["anchor"];
  isFullWidth?: boolean;
}

export interface DropdownMenuItem {
  text: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export default function Dropdown({ children, menuItem, anchor = { to: "bottom end", gap: 6 }, isFullWidth }: DropdownProps) {
  return (
    <Menu>
      <MenuButton as={Fragment}>{children}</MenuButton>
      <MenuItems anchor={anchor} className={clsx({ "w-[var(--button-width)]": isFullWidth }, "rounded-8 z-20 flex flex-col gap-1 border border-neutral-300 bg-white p-2")}>
        {menuItem.map((item, index) => (
          <MenuItem key={index}>
            <div>
              {item.href && (
                <Link href={item.href} onClick={item.onClick} className="rounded-4 block w-full cursor-pointer px-2 py-1 text-neutral-600 hover:bg-neutral-200">
                  {item.text}
                </Link>
              )}
              {!item.href && (
                <div onClick={item.onClick} className="rounded-4 w-full cursor-pointer px-2 py-1 text-neutral-600 hover:bg-neutral-200">
                  {item.text}
                </div>
              )}
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
