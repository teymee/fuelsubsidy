import React from "react";
// 🚨 assets
import phone from "@/assets/svg/phone.svg";
import sc from "@/assets/svg/small-circle.png";
import bc from "@/assets/svg/big-circle.svg";
import qrCode from "@/assets/svg/qr-code.svg";
import smart from "@/assets/svg/smart.svg"; 

export default function Hero() {
  return (
    <section className="bg-primary h-screen">
      <section className="relative w-full h-full wrapper">
        {/* 🚨 left-text */}
        <section className=" h-full ">
          <div className="absolute text-remis-50  left-0 top-[45%] -translate-y-1/2 space-y-10">
            <div className="w-fit relative">
              <img
                src={smart}
                alt=""
                className="absolute right-[-20%] top-[-20%]"
              />
              <h1 className="text-[5rem] leading-24 font-semibold">
                Fuel up. <br /> Pay less.
              </h1>
            </div>
            {/* <h1 className="text-[3.5rem] leading-18 font-semibold">
              Smart Fueling. <br /> Real Savings.
            </h1> */}

            <div className="bg-[#54868866] w-fit flex gap-x-4 item-center pr-4 rounded-2xl">
              <img src={qrCode} alt="" />
              <p className="my-auto text-base">
                Scan to download our App on the <br /> Play store and App store.
              </p>
            </div>
          </div>
        </section>

        {/* {🚨app image } */}
        <div className="relative-center z-30">
          <img src={phone} alt="fuelsubsidy app" className="w-[80%] mx-auto" />
        </div>

        {/* 🚨 circles  */}
        <section className="">
          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] ">
            <img src={bc} alt="semi-circle" />
          </div>

          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2  ">
            <img src={sc} alt="semi-circle" />
          </div>
        </section>

        {/* 🚨 right-text */}
        <section className="absolute bottom-[30%] right-[5%] w-[25%]">
          <p className="text-textColor-50 text-lg">
            With all the essentials you need out in the world, and nothing to
            limit your possibilities, here is everything Remis has to offer.
          </p>
        </section>
        {/*  */}
      </section>
    </section>
  );
}
