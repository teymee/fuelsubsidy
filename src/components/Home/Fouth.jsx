import React, { useState } from "react";

// 🚨 assets
import ad from "@/assets/svg/app-ad.svg";
import line from "@/assets/svg/line.svg";
import wallet from "@/assets/svg/wallet.svg";

import pump from "@/assets/svg/pump.svg";
import gift from "@/assets/svg/gift.svg";
import people from "@/assets/svg/people.svg";
// import activeImg from "@/assets/svg/active-img.svg";
import activeLine from "@/assets/svg/active-line.svg";
import activePeople from "@/assets/svg/active-people.svg";
import activeWallet from "@/assets/svg/active-wallet.svg";
import activePump from "@/assets/svg/active-pump.svg";
import activeGift from "@/assets/svg/active-gift.svg";
import referFriend from "@/assets/svg/referFriend.svg";
export default function Fouth() {
  // 🚨 states
  const [active, setActive] = useState(0);
  return (
    <section className="wrapper global-gap">
      <section className="flex gap-x-4 items-center [ lg:gap-y-0 gap-y-4 ] [ lg:flex-row flex-col-reverse ]">
        <div className="lg:w-1/2">
          <img src={ad} alt="" className="w-full" />
        </div>

        <section className=" overflow-hidden lg:w-1/2 relative bg-remis-1000 rounded-2xl p-8 h-full space-y-4">
          <h1 className="text-remis-500 font-semibold [ lg:text-display-xs text-heading-md ]">
            Refer & Earn Up to ₦100,000 Weekly in{" "}
            <br className="[ lg:block hidden ] " /> Fuel Subsidy
          </h1>

          <section className=" [ lg:h-[430px] h-[250px] ] lg:mt-10 mt-20">
            {/* 🚨 Line  */}
            <div className="absolute [ lg:left-0 left-[-20px] ] [ top-[25%] ]">
              <img src={line} alt="" className="" />
            </div>

            {/* 🚨 icons  */}
            <div className="absolute w-auto space-y-6 [ lg:left-8 left-4 ] [ lg:top-[30%] top-[30%] ]">
              <section
                onClick={() => setActive(0)}
                className="flex items-center gap-x-4  "
              >
                <div className="[ lg:w-auto w-[45px] ]">
                  <img
                    src={active === 0 ? activePeople : people}
                    alt=""
                    className={`${active === 0 ? "w-[65px]" : "w-[60px]"} `}
                  />
                </div>

                <img src={activeLine} alt="" />
              </section>

              <section
                onClick={() => setActive(1)}
                className="flex items-center gap-x-4  "
              >
                <div className="[ lg:w-auto w-[45px] ]">
                  <img
                    src={active === 1 ? activeWallet : wallet}
                    alt=""
                    className={`${active === 1 ? "w-[65px]" : "w-[60px]"} `}
                  />
                </div>

                <img src={activeLine} alt="" />
              </section>

              <section
                onClick={() => setActive(2)}
                className="flex items-center gap-x-4  "
              >
                <div className="[ lg:w-auto w-[45px] ]">
                  <img
                    src={active === 2 ? activePump : pump}
                    alt=""
                    className={`${active === 1 ? "w-[65px]" : "w-[60px]"} `}
                  />
                </div>

                <img src={activeLine} alt="" />
              </section>

              <section
                onClick={() => setActive(3)}
                className="flex items-center gap-x-4  "
              >
                <div className="[ lg:w-auto w-[45px] ]">
                  <img
                    src={active === 3 ? activeGift : gift}
                    alt=""
                    className={`${active === 1 ? "w-[65px]" : "w-[60px]"} `}
                  />
                </div>

                <img src={activeLine} alt="" />
              </section>
            </div>

            {/* 🚨image  */}
            <section className="absolute  [ lg:w-full lg:h-full w-[260px] h-[240px] ] [ lg:left-45 right-0 ] [ lg:top-[30%] top-[32%] ] ">
              <img src={referFriend} alt="" className="h-full w-full object-cover " />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
