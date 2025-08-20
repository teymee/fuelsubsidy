import React from "react";

// 🚨 component
import FaqItem from "./FaqItem";

// 🚨 assets
import vid from "@/assets/svg/vid1.svg";

export default function FAQ() {
  const faq = [
    {
      title: "What is Fuel Subsidy and who is it for?",
      body: {
        media: vid,
        header: "What is Fuel Subsidy and who is it for?",
        desc: "Fuel Subsidy is a mobile app built for drivers who want to save money, earn rewards, and keep better track of fuel and car expenses",
      },
    },

    {
      title: "How do I get discounts on fuel?",
      body: {
        media: vid,
        header: "How do I get discounts on fuel?",
        desc: "Just fund your in-app wallet, create a voucher, and use it at a partner station to get fuel at reduced prices instantly. ",
      },
    },

    {
      title: "What are loyalty points and how can I use them?",
      body: {
        media: vid,
        header: "What are loyalty points and how can I use them?",
        desc: " You earn points when you buy fuel or refer friends. Once you reach a certain amount, convert them to fuel discounts inside the app",
      },
    },

    {
      title: "How does self-service fueling work?",
      body: {
        media: vid,
        header: "How does self-service fueling work?",
        desc: "At partner stations, enter a code (or scan a QR code) from your app to activate the pump, no waiting, no hassle. ",
      },
    },

    {
      title: "Do I need hardware to track my car’s performance?",
      body: {
        media: vid,
        header: "Do I need hardware to track my car’s performance?",
        desc: "For full tracking, you can request an OBD device. But you can still use GPS for basic tracking and expense reports.",
      },
    },

    {
      title: "Is my payment and car data secure?",
      body: {
        media: vid,
        header: "Is my payment and car data secure?",
        desc: "Yes. We use end-to-end encryption and secure payment systems. Your data stays safe, always.",
      },
    },
  ];

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
