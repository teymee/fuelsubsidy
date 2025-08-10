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
      <section className="flex gap-x-4 items-center">
        <div className="w-1/2">
          <img src={ad} alt="" className="w-full" />
        </div>

        <section className=" w-1/2 relative bg-remis-1000 rounded-2xl p-8 h-full space-y-4">
          <h1 className="text-remis-500 font-semibold text-display-xs">
            Refer & Earn Up to ₦100,000 Weekly in <br /> Fuel Subsidy
          </h1>

          <section className=" h-[430px] mt-10">
            <div className="absolute left-0">
              <img src={line} alt="" className="" />
            </div>

            <div className="absolute w-auto space-y-6 left-8 top-[30%]">
              <section
                onClick={() => setActive(0)}
                className="flex items-center gap-x-4  "
              >
                <div>
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
                <div>
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
                <div>
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
                <div>
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
            <section className="absolute left-45 top-[30%]">
              <div>
                <img src={referFriend} alt="" />
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
