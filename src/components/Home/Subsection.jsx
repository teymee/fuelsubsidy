import React, { useRef, useState } from "react";
// 🚨 assets
import logo from "@/assets/svg/logo.svg";
import scan from "@/assets/svg/scan.svg";
import location from "@/assets/svg/location.svg";
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
      header: "Pay less at the pump  up to ₦300 off ",
      desc1:
        "Enjoy discounts at partner stations Top up your wallet and generate fuel vouchers instantly, no hidden charges, just real savings. ",
      position: "3",
      img: payless,
      tagline: "Fuel subsidy is back",
      color: "#F5F5F5",
    },
  ];

  //   useGSAP(() => {
  //   const text = SplitText.create(".about-app", { type: "words" });
  //   let isAnimatingText = false;
  //   let currentWordIndex = 0;
  //   let accumulatedDelta = 0;
  //   const scrollThreshold = 50;

  //   gsap.set(text.words, {
  //     color: "#999",
  //     fontWeight: 400
  //   });

  //   const animateWord = (index) => {
  //     if (index < text.words.length) {
  //       gsap.to(text.words[index], {
  //         color: "black",
  //         fontWeight: 500,
  //         duration: 0.3,
  //         ease: 'power2.out'
  //       });
  //     }
  //   };

  //   const resetWord = (index) => {
  //     if (index >= 0 && index < text.words.length) {
  //       gsap.to(text.words[index], {
  //         color: "#999",
  //         fontWeight: 400,
  //         duration: 0.3,
  //         ease: 'power2.out'
  //       });
  //     }
  //   };

  //   // Custom scroll handler
  //   const handleScroll = (e) => {
  //     if (!isAnimatingText) return;

  //     e.preventDefault();
  //     e.stopPropagation();

  //     const delta = e.deltaY;
  //     accumulatedDelta += delta;

  //     // Scrolling down - advance words
  //     if (accumulatedDelta >= scrollThreshold && currentWordIndex < text.words.length) {
  //       animateWord(currentWordIndex);
  //       currentWordIndex++;
  //       accumulatedDelta = 0;

  //       if (currentWordIndex >= text.words.length) {
  //         isAnimatingText = false;
  //         setTimeout(() => {
  //           window.scrollBy(0, 100);
  //         }, 300);
  //       }
  //     }
  //     // Scrolling up - reverse words
  //     else if (accumulatedDelta <= -scrollThreshold && currentWordIndex > 0) {
  //       currentWordIndex--;
  //       resetWord(currentWordIndex);
  //       accumulatedDelta = 0;

  //       // If we've gone back to the beginning, exit animation mode
  //       if (currentWordIndex <= 0) {
  //         isAnimatingText = false;
  //       }
  //     }
  //   };

  //   // ScrollTrigger to detect when to start hijacking scroll
  //   ScrollTrigger.create({
  //     trigger: ".subsection",
  //     start: "top 10%",
  //     end: "bottom 20%",
  //     onEnter: () => {
  //       if (!isAnimatingText && currentWordIndex === 0) {
  //         isAnimatingText = true;
  //         window.addEventListener('wheel', handleScroll, { passive: false, capture: true });
  //       }
  //     },
  //     onLeave: () => {
  //       // Clean up if user scrolls past without completing animation
  //       if (isAnimatingText) {
  //         window.removeEventListener('wheel', handleScroll, { capture: true });
  //         isAnimatingText = false;
  //       }
  //     },
  //     onEnterBack: () => {
  //       if (!isAnimatingText && currentWordIndex > 0) {
  //         isAnimatingText = true;
  //         window.addEventListener('wheel', handleScroll, { passive: false, capture: true });
  //       }
  //     },
  //     onLeaveBack: () => {
  //       // Reset all words when leaving back
  //       if (isAnimatingText) {
  //         window.removeEventListener('wheel', handleScroll, { capture: true });
  //         isAnimatingText = false;
  //         currentWordIndex = 0;
  //         gsap.set(text.words, {
  //           color: "#999",
  //           fontWeight: 400
  //         });
  //       }
  //     }
  //   });

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll, { capture: true });
  //   };
  // }, []);

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

    const container = cardContainer.current;
    console.log("Cards ready for animation:", cardsRef.current.length, "cards");
    ScrollTrigger.create({
      trigger: container,
      start: "center center",
      end: "+=2000",
      // pin: true,
      // markers: true,
    });

    // const cards = cardsRef.current;

    // gsap.set(".card", {
    //   y: 100,
    //   opacity: 0,
    // });

    // cards.forEach((card, index) => {
    //   gsap.to(card, {
    //     y: index * 90,
    //     scale: index / 10 + 0.8,

    //     opacity: 1,
    //     stagger: 0.3,
    //     scrollTrigger: {
    //       trigger: card,
    //       scrub: true,
    //       start: "center center",
    //       end: "bottom bottom",
    //     },
    //   });
    // });
  }, []);

  return (
    <section className="wrapper py-8 subsection ">
      {/* 🚨 nav  */}
      <nav className="sticky top-20 z-50">
        <section className=" [ lg:w-1/2 w-[95%] ] second-nav mx-auto rounded-full flex justify-between  items-center bg-textColor-900 px-4 py-3">
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
              <button className="flex gap-x-1 w-fit px-3 py-2 items-center rounded-full bg-remis-50">
                <img src={location} alt="find station" />
                <h1 className="text-remis-500 font-bold text-base">
                  Find a station
                </h1>
              </button>

              <button className="flex gap-x-2 w-fit px-3 py-2 items-center rounded-full bg-sec">
                <img src={scan} alt="download app" />
                <h1 className="text-remis-500 font-bold text-base">
                  Download app
                </h1>
              </button>
            </div>
            <div className="[ flex lg:hidden ] " onClick={() => setToggleNav(!toggleNav)}>
              <img src={hamburger} alt="" />
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
        Fuel Subsidy is a mobile app that helps everyday vehicle owners save on
        fuel. Get discounts with digital vouchers, earn rewards for buying and
        referring, and monitor your fuel expenses, trips, and driving habits,
        all from one app.
      </h1>
      {/*  */}

      {/* 🚨 cards  */}
      <section
        ref={cardContainer}
        className="relative [ lg:mt-60 mt-80 ] h-[43.75rem]"
      >
        <div className="w-full">
          {cards.map((details, index) => {
            return (
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                style={{ bottom: index * 90, scale: index / 10 + 0.8 }}
                className={` card absolute `}
              >
                <Card details={details} />
              </div>
            );
          })}
        </div>
      </section>
      {/*  */}

      {/* 🚨 promo text  */}
      <section className="my-10">
        <h1 className="text-center [ lg:font-medium font-semibold ] text-remis-500 [ lg:text-display-lg text-display-md ] lg:leading-20">
          Over ₦1,000,000 saved on <br />
          subsidy
        </h1>
      </section>
      {/*  */}
    </section>
  );
}
