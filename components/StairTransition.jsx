"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Stairs";

export default function StairTransition() {
  const path = usePathname();
  return (
    <>
      <AnimatePresence>
        <div key={path}>
          <div className=" h-screen w-screen pointer-events-none right-0 left-0 z-40 flex fixed top-0">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
