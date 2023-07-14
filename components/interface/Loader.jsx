import Image from "next/image";
import React from "react";
import Logo from "../public/assets/logo/S-Logo.svg";

export default function Loader() {
  return (
    <div className="w-full h-full fixed bg-interface-700 z-50 flex justify-center items-center">
      <Image alt="Loading Logo" src={Logo} />
    </div>
  );
}
