import React, { useState } from "react";
// 🚨 asset
import arrow from "@/assets/svg/arrow.svg";

export default function FaqItem({ title, body: { desc, media, header } }) {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <section
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <h2 className="text-neutral-100 font-medium text-[18px]">{title}</h2>
        <img src={arrow} alt="toggle dropdown" />
      </section>

      <section
        className={` flex justify-between transition-all duration-200 py-6 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <div>
          <img src={media} alt="" />
        </div>

        <div className="w-[40%] space-y-4 ">
          <h4 className="text-neutral-100 font-medium text-heading-md">{header}</h4>
          <p className="text-base text-neutral-400 text-heading-xs">{desc}</p>

          {/* <button className="border-2 border-neutral-400 rounded-full font-medium px-4 py-2 text-heading-xs text-white ">
            Learn more
          </button> */}
        </div>
      </section>
    </section>
  );
}
