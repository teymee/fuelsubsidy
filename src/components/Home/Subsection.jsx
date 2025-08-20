import React from "react";
// 🚨 assets
import logo from "@/assets/svg/logo.svg";
import scan from "@/assets/svg/scan.svg";
import location from "@/assets/svg/location.svg";

import drive from "@/assets/svg/drive-earn.svg";
import smartDrive from "@/assets/svg/smart-drive.svg";
import payless from "@/assets/svg/pay-less.svg";
import Card from "../UI/Card";

export default function Subsection() {
  const cards = [
    {
      header: "Drive, Earn, Save",
      desc1:
        "Get rewarded for buying fuel, Earn loyalty points each time you buy or refer a friend and convert them into fuel discounts.",
      position: "1",
      img: drive,
      tagline: "Track your vehicle performance",
      color: "#F1F8FF",
    },
    {
      header: "Smarter Driving, Better Control ",
      desc1:
        "With all the essentials you need out in the world, and nothing to limit your possibilities, here is everything Remis has to offer.",
      position: "2",
      img: smartDrive,
      tagline: "Track your vehicle performance",
      color: "#F8FFF1",
    },
    {
      header: "Pay less at the pump  up to ₦300 off ",
      desc1:
        "Enjoy discounts at partner stations Top up your wallet and generate fuel vouchers instantly, no hidden charges, just real savings. ",
      position: "3",
      img: payless,
      tagline: "Fuel subsidy is back",
      color: "#F5F5F5",
    },
  ];


  return (
    <section className="wrapper py-8 ">
      {/* 🚨 nav  */}
      <section className="w-1/2 second-nav mx-auto rounded-full flex justify-between sticky top-4 z-50 items-center bg-textColor-900 px-4 py-3">
        <div className="flex gap-x-1 items-center">
          <img
            src={logo}
            alt="fuelsubsidy logo"
            className="w-[2rem] h-[2rem]"
          />
          <h1 className="text-remis-50 text-[1.25rem]">FuelSubsidy</h1>
        </div>

        <div className="flex gap-x-2 items-center">
          <button className="flex gap-x-1 w-fit px-3 py-2 items-center rounded-full bg-remis-50">
            <img src={location} alt="find station" />
            <h1 className="text-remis-500 font-bold text-base">
              Find a station
            </h1>
          </button>

          <button className="flex gap-x-2 w-fit px-3 py-2 items-center rounded-full bg-sec">
            <img src={scan} alt="download app" />
            <h1 className="text-remis-500 font-bold text-base">Download app</h1>
          </button>
        </div>
      </section>

      {/* 🚨excerpt  */}
      <h1 className="text-heading-xxl text-textColor-400 my-20">
        Fuel Subsidy is a mobile app that helps everyday vehicle owners save on
        fuel. Get discounts with digital vouchers, earn rewards for buying and
        referring, and monitor your fuel expenses, trips, and driving habits,
        all from one app.
      </h1>
      {/*  */}

      {/* 🚨 cards  */}
      <section className="relative mt-40 h-[43.75rem]">
        <div className="w-full">
          {cards.map((details, index) => {
            return (
              <div
                className={`absolute `}
                style={{ bottom: index * 90, scale: index / 10 + 0.8 }}
              >
                <Card details={details} />
              </div>
            );
          })}
        </div>
      </section>
      {/*  */}

      {/* 🚨 promo text  */}
      <section className="my-10">
        <h1 className="text-center font-medium text-remis-500 text-display-lg leading-20">
          Over ₦1,000,000 saves on <br />
          subsidy
        </h1>
      </section>
      {/*  */}
    </section>
  );
}
