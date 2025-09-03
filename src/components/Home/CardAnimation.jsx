import React, { useRef } from "react";

import drive from "@/assets/svg/drive-earn.svg";
import smartDrive from "@/assets/svg/smart-drive.svg";
import payless from "@/assets/svg/pay-less.svg";
import Card from "../UI/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function CardAnimation() {
  const cardContainer = useRef();
  const cardsRef = useRef([]);
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

    useGSAP(() => {
    // const text = SplitText.create(".about-app", { type: "words" });

    // gsap.to(text.words, {
    //   color: "black",
    //   fontWeight: 500,
    //   stagger: 0.2,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".subsection",
    //     start: "top 150%",
    //     end: "bottom 85%",
    //     toggleActions: "play none none reverse",
    //     scrub: true,
    //   },
    // });

    // const container = cardContainer.current;

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
          markers: true,
        },
      });
    });
  }, []);

  return (
    <section>
      <h1>Trial</h1>
      {/* 🚨 cards  */}
      <section
        ref={cardContainer}
        className="[ lg:mt-60 mt-80 ] bg-red-900 card-container"
      >
        {cards.map((details, index) => {
          return (
            <div
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
    </section>
  );
}
