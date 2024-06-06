"use client";
import Link from "next/link";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
// import MobileNav from "./MobileNav";

export default function Header() {
  const path = usePathname();
  return (
    <>
      <header className=" py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between">
          <Link href="/">
            <h1 className=" text-3xl font-semibold">
              Asmit <span className=" text-green-500">.</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/hire">
              <button
                type="button"
                className={`rounded bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black 
                ${
                  path === "/hire"
                    ? "text-green-500 border-b-2 border-green-500"
                    : ""
                }
                `}
              >
                Hire Me
              </button>
            </Link>
          </div>

          <div>{/* <MobileNav /> */}</div>
        </div>
      </header>
    </>
  );
}
