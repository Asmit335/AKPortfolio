"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "service",
    href: "/#services",
  },
  {
    name: "about",
    href: "/#about",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "document",
    href: "/document",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

export default function Nav() {
  const path = usePathname();

  return (
    <>
      <nav className=" flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                path === link.href
                  ? "text-green-500 border-b-2 border-green-500"
                  : ""
              } capitalize hover:text-green-500 transition-all font-medium`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
