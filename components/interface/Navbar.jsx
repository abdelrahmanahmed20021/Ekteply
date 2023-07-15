"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../../public/assets/logo/LOGO.svg";
import Image from "next/image";
import { MdFilterList } from "react-icons/md";
import ListLinks from "./ListLinks";
import Link from "next/link";

export default function Navbar() {
  const [screen, setScreen] = useState("");
  const [dropStatus, setDropStatus] = useState(false);
  useLayoutEffect(() => {
    window &&
      window.addEventListener("resize", ({ target }) => {
        target.innerWidth < 1200 ? setScreen("mobile") : setScreen("desktop");
      });
  }, []);

  return (
    <header className="h-[80px] items-center ">
      <nav className="h-full flex items-center  justify-between">
        <Link href="/">
          <div>
            <Image src={Logo} alt="LOGO" priority />
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <ListLinks dropStatus={dropStatus} />
          {window && window.innerWidth < 1200 && (
            <div className="flex items-center gap-5">
              <div
                onClick={() => setDropStatus(!dropStatus)}
                className="w-full cursor-pointer text-interface-900"
              >
                <MdFilterList size={"30px"} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
