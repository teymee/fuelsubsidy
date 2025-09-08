import React, { useRef, useState } from "react";
// 🚨 assets
import logo from "@/assets/svg/logo.svg";
import appleStore from "@/assets/svg/green-apple.svg";
import playstore from "@/assets/svg/green-playstore.svg";
import hamburger from "@/assets/svg/hamburger.svg";
import drive from "@/assets/svg/drive-earn.svg";
import smartDrive from "@/assets/svg/smart-drive.svg";
import payless from "@/assets/svg/pay-less.svg";
import Card from "../UI/Card";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import appStore from "@/assets/svg/appStore.svg";
import googlePlay from "@/assets/svg/googlePlay.svg";

export default function Subsection() {
  const [toggleNav, setToggleNav] = useState(false);
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
      header: "Pay less at the pump  up to ₦300 off",
      desc1:
        "Enjoy discounts at partner stations. Top up your wallet and generate fuel vouchers instantly, no hidden charges, just real savings.",
      position: "3",
      img: payless,
      tagline: "Fuel subsidy is back",
      color: "#F5F5F5",
    },
  ];

  const cardContainer = useRef();
  const cardsRef = useRef([]);
  useGSAP(() => {
    const text = SplitText.create(".about-app", { type: "words" });

    gsap.to(text.words, {
      color: "black",
      fontWeight: 500,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".subsection",
        start: "top 150%",
        end: "bottom 85%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.to(card, {
        scale: 0.8 + 0.2 * (index / cards?.length - 1),

        scrollTrigger: {
          trigger: card,
          scrub: true,
          start: `top ${15 + 35 * index}`,
          end: "bottom bottom",
          endTrigger: ".card-container",
          pin: card,
          pinSpacing: false,
          // markers: true,

          invalidateOnRefresh: true,
        },
      });
    });
  }, []);

  return (
    <section className="wrapper py-8 subsection ">
      {/* 🚨 nav  */}
      <nav className="sticky second-nav  [ lg:top-8 top-4   ] z-50">
        <section className=" [ lg:w-7/12 w-[95%] ]  mx-auto rounded-full flex justify-between  items-center bg-textColor-900 px-4 py-3">
          <div className="flex gap-x-1 items-center">
            <img
              src={logo}
              alt="fuelsubsidy logo"
              className="[ lg:w-[2rem] lg:h-[2rem] w-[28px] ]"
            />
            <h1 className="text-remis-50 [ lg:text-[1.25rem] text-base ] font-medium">
              FuelSubsidy
            </h1>
          </div>

          <section>
            <div className=" gap-x-2 items-center [ lg:flex hidden ] ">
              <a
                href="https://play.google.com/store/apps/details?id=africa.remis.b2c"
                className="flex gap-x-1 w-fit px-3 py-2 items-center rounded-full bg-remis-50"
              >
                <img src={playstore} alt="find station" />
                <h1 className="text-remis-500 font-bold text-base">
                  Download from Playstore
                </h1>
              </a>

              <a
                href="https://apps.apple.com/ng/app/fuelsubsidy/id6745834042"
                className="flex gap-x-2 w-fit px-3 py-2 items-center rounded-full bg-sec"
              >
                <img src={appleStore} alt="download app" />
                <h1 className="text-remis-500 font-bold text-base">
                  Download from Apple store
                </h1>
              </a>
            </div>
            <div
              className="[ flex lg:hidden ] "
              onClick={() => setToggleNav(!toggleNav)}
            >
              <img src={hamburger} alt="" className=" w-8" />
            </div>
          </section>
        </section>

        {toggleNav && (
          <section className="bg-primary rounded-md mt-4 py-4 w-full [ block lg:hidden ]">
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
        )}
      </nav>

      {/* 🚨excerpt  */}
      <h1 className="[ lg:text-heading-xxl text-base ] [ lg:my-20 my-10 ] text-textColor-400  about-app ">
        FuelSubsidy is a mobile app that helps everyday vehicle owners save on
        fuel. Get discounts with digital vouchers, earn rewards for buying and
        referring, and monitor your fuel expenses, trips, and driving habits,
        all from one app.
      </h1>
      {/*  */}

      {/* 🚨 cards  */}
      <section
        ref={cardContainer}
        className="[ lg:mt-60 mt-80 mb-50 ]  card-container"
      >
        {cards.map((details, index) => {
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              // style={{ bottom: index * 90, scale: index / 10 + 0.8 }}
              className={` card mb-[10vh]`}
            >
              <Card details={details} />
            </div>
          );
        })}
      </section>
      {/*  */}

      {/* 🚨 promo text  */}
      <section className="lg:my-10">
        <h1 className="text-center [ lg:font-medium font-semibold ] text-remis-500 [ lg:text-[60px] text-[30px] ] lg:leading-18 [ lg:w-11/12 mx-auto ] ">
          Over ₦1,000,000 saved on subsidy. Get more with every fill. Turn every
          drop into value
        </h1>
      </section>
      {/*  */}
    </section>
  );
}
