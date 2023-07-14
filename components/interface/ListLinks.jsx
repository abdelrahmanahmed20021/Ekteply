import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/routes/route";
import { usePathname } from "next/navigation";
import SwitchLang from "./SwitchLang";

export default function ListLinks({ dropStatus }) {
  const pathname = usePathname();

  const isActive = (path) => {
    if (window.innerWidth >= 1200) {
      return pathname == path
        ? "bg-interface-800 text-light-900 animate-scale-link"
        : "";
    }
    return pathname == path
      ? "bg-main-800 text-light-900 py-1 px-3 h-max animate-scale-link"
      : "";
  };

  if (window.innerWidth < 1200) {
    return (
      <div
        style={{ right: !dropStatus ? "-100%" : "10px" }}
        className="flex  items-center rounded-sm gap-5 transition-all ease flex-col px-5 py-3 fixed top-24  bg-interface-700"
      >
        {navLinks.map((e) => (
          <Link href={e.href} key={e.name}>
            <Button
              variant="link"
              className={`${isActive(e.href)}  w-[100px] px-3 py-1`}
            >
              {e.name}
            </Button>
          </Link>
        ))}
        <div className="mt-5">
          <SwitchLang />
        </div>
        <div className="tooltip"></div>
      </div>
    );
  }
  return (
    <div className="flex gap-10">
      {navLinks.map((e) => (
        <Link href={e.href} key={e.name}>
          <Button variant="link" className={isActive(e.href)}>
            {e.name}
          </Button>
        </Link>
      ))}
      <SwitchLang />
    </div>
  );
}
