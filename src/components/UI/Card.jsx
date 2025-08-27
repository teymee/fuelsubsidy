import React from "react";

import cardFoot from "@/assets/svg/card-foot.svg";

export default function Card({ classStyle, details }) {
  const { header, desc1, position, img, tagline, color } = details ?? {};
  return (
    <section
      style={{ backgroundColor: color }}
      className={`w-full [ lg:rounded-4xl rounded-xl ] [ lg:h-[638px] h-[783px] ] py-4 ${classStyle}`}
    >
      <section className="w-[95%] mx-auto h-full  flex justify-between">
        <section className="flex flex-col justify-between [ lg:w-[30%] w-[95%]  lg:m-0 mx-auto ] ">
          <div className="space-y-4 [ lg:mt-[20%] mt-4 ]">
            <h1 className="font-bold text-remis-500 [ lg:text-display-sm text-heading-lg ]">
              {header}
            </h1>

            <section className=" block lg:hidden">
              <img src={img} alt="" className="w-[310px] h-[319px]" />
            </section>

            <p className="text-textColor-500 [ lg:text-lg text-base ] ">
              {desc1}
            </p>
          </div>

          {/* 🚨 footer  */}
          <div className="lg:pb-2 space-y-4 ">
            <img src={cardFoot} alt="" className=" [ w-[9rem] ]" />

            <div className=" [ lg:mt-10 ] flex gap-x-4 text-textColor-500 lg:items-center font-medium flex-responsiveness">
              <div className="w-[2rem] h-[2rem] rounded-full bg-remis-100  flex   items-center justify-center">
                {position}
              </div>

              <p className="text-lg">{tagline}</p>
            </div>
          </div>
        </section>

        <section className=" lg:block hidden">
          <img src={img} alt="" />
        </section>
      </section>
    </section>
  );
}
