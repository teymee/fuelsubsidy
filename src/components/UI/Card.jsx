import React from "react";

import cardFoot from "@/assets/svg/card-foot.svg";

export default function Card({ classStyle, details }) {
  const { header, desc1, position, img , tagline,color} = details ?? {};
  return (
    <section
      style={{ backgroundColor: color }}
      className={`w-full rounded-4xl h-[638px] py-4 ${classStyle}`}
    >
      <section className="w-[95%] mx-auto h-full  flex justify-between">
        <section className="flex flex-col justify-between w-[30%]  ">
          <div className="space-y-4 mt-[20%]">
            <h1 className="font-bold text-remis-500 text-display-sm">
              {header}
            </h1>

            <p className="text-textColor-500 text-lg ">{desc1}</p>
          </div>

          <div className="pb-2">
            <img src={cardFoot} alt="" />

            <div className=" mt-10 flex gap-x-4 text-textColor-500 items-center font-medium">
              <div className="w-[2rem] h-[2rem] rounded-full bg-remis-100  flex   items-center justify-center">
                {position}
              </div>

              <p className="text-lg">{tagline}</p>
            </div>
          </div>
        </section>

        <section>
          <img src={img} alt="" />
        </section>
      </section>
    </section>
  );
}
