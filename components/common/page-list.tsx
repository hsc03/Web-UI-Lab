"use client";

import { menus } from "@/lib/consts/links";
import Link from "next/link";
import { useState } from "react";
import { FolderIcon, FolderOpenIcon } from "@phosphor-icons/react";

export default function PageList() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ul className="mt-8 space-y-4">
      {menus.map((menu) => (
        <li
          key={menu.href}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-row items-center gap-x-2 text-lg text-foreground "
        >
          {isHovered ? (
            <FolderOpenIcon size={24} weight="fill" color="#ffcc00" />
          ) : (
            <FolderIcon size={24} weight="fill" color="#ffcc00" />
          )}
          <Link href={menu.href}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  )
}
