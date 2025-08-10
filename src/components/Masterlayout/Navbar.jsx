import React from "react";

// 🚨 assets
import logo from "@/assets/svg/logo.svg";
import location from "@/assets/svg/location.svg";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-4 w-full">
      <section className=" wrapper  flex justify-between items-center">
        <div className="flex gap-x-1 items-center">
          <img src={logo} alt="fuelsubsidy logo" />
          <h1 className="text-remis-50 text-[22.04px]">FuelSubsidy</h1>
        </div>

        <button className="flex gap-x-2 w-fit px-5 py-3 items-center rounded-full bg-sec">
          <img src={location} alt="find station" />
          <h1 className="text-remis-500 font-bold text-base">Find a station</h1>
        </button>
      </section>
    </nav>
  );
}
