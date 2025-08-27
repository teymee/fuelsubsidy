import React from "react";
// 🚨 assets
import phone from "@/assets/svg/Phone.svg";
import sc from "@/assets/svg/small-circle.png";
import bc from "@/assets/svg/big-circle.svg";
import qrCode from "@/assets/svg/qr-code.svg";
import smart from "@/assets/svg/smart.svg";
import appStore from "@/assets/svg/appStore.svg";
import googlePlay from "@/assets/svg/googlePlay.svg";

export default function Hero() {
  return (
    <section className="bg-primary [ lg:h-screen h-[120vh] ] hero overflow-hidden">
      <section className="relative w-full h-full wrapper">
        {/* 🚨 left-text */}
        <section className=" h-full ">
          <div className="absolute text-remis-50  left-0 [ lg:top-[45%] top-[20%] ] -translate-y-1/2 space-y-10">
            <div className="w-fit relative">
              <img
                src={smart}
                alt=""
                className="right-[-20%] top-[-20%] [ lg:absolute hidden ]"
              />

              <h1 className=" [ lg:text-[3.5rem] text-display-sm ] [ lg:leading-18 ] font-semibold">
                Smart Fueling. <br /> Real Savings.
              </h1>
            </div>

            <div className="bg-[#54868866] w-fit  gap-x-4 item-center pr-4 rounded-2xl [ lg:flex hidden ]">
              <img src={qrCode} alt="" />
              <p className="my-auto text-base">
                Scan to download our App on the <br /> Play store and App store.
              </p>
            </div>
          </div>
        </section>

        {/* {🚨app image } */}
        <div className="relative-center [ lg:w-[25%] w-[65%] lg:mt-0 mt-[-20px] ]">
          <img
            src={phone}
            alt="fuelsubsidy app"
            className="[ lg:w-[80%] lg:h-full !w-[90%] ] mx-auto"
          />
        </div>

        {/* 🚨 circles  */}
        <section className="">
          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 [ lg:w-[80%] w-[300%] ] ">
            <img src={bc} alt="semi-circle" />
          </div>

          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2  [ lg:w-[50%] w-[200%] ] ">
            <img src={sc} alt="semi-circle" />
          </div>
        </section>

        {/* 🚨 right-text */}
        <section className="absolute space-y-4  [ lg:w-[30%] ]  [ lg:bottom-[30%] bottom-10 ] right-[5%] ">
          <p className="text-textColor-50 [ lg:text-lg text-sm ]">
            Buy fuel at discounted rates, earn rewards, and track your vehicle
            movement, all in one easy app. Built for everyday drivers who want
            more value for their money at the pump.
          </p>

          <section className="bg-[#54868866] rounded-xl py-4 [ block lg:hidden ]">
            <a
              href="https://apps.apple.com/ng/app/fuelsubsidy/id6745834042"
              target="_blank"
            >
              <img src={appStore} alt="" className="w-full h-[40px]" />
            </a>

            <div className="mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=africa.remis.b2c"
                target="_blank"
              >
                <img src={googlePlay} alt="" className="w-full h-[40px]" />
              </a>
            </div>
          </section>
        </section>
        {/*  */}
      </section>
    </section>
  );
}
