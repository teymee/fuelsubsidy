import React from "react";

// 🚨 component
import FaqItem from "./FaqItem";

// 🚨 assets
import vid from "@/assets/svg/vid1.svg";

export default function FAQ() {
  const obj = {
    title: "How do I register for an in-person class?",
    body: {
      media: vid,
      header: "How do I register for an in-person class?",
      desc: "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts. Or hit the ground running with 10 pre-built templates, all in light or dark mode.",
    },
  };

  const faq = Array(8).fill(obj);

  console.log(faq, "kkk");
  return (
    <section className="bg-remis-800 ">
      <section className=" w-[80%] mx-auto py-20 space-y-10">
        <div className="text-white text-center text-display-md font-semibold ">
          <h1 className="leading-19">
            Frequently Asked <br /> Questions
          </h1>
        </div>

        <section className="bg-remis-900 rounded-2xl pt-4  px-14">
          <section className=" py-14">
            {faq.map((item) => {
              return (
                <section className="border-t-neutral-300 border-t-[1px] py-4">
                  <FaqItem {...item} />
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}
