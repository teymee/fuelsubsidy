import React, { useRef } from "react";

// 🚨 assets
import logo from "@/assets/svg/logo.svg";
import location from "@/assets/svg/location.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Navbar() {
  const navRef = useRef();
  useGSAP(() => {
    ScrollTrigger.killAll();
    gsap.from(".navbar", {
      backgroundColor: "transparent",
    });
    const tl = gsap.timeline();
    tl.to(".navbar", {
      backgroundColor: "#002020",
      top: 0,
      zIndex: 1,
      scrollTrigger: {
        trigger: ".hero",
        duration: 0.5,
        start: "bottom 90%",
        end: "bottom 90%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".navbar", {
      y: -100,
      opacity: 0,
      ease: "bounce.inOut",
      scrollTrigger: {
        trigger: ".hero",
        duration: 0.5,
        start: "bottom 10%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "top -100",
      end: "bottom bottom",
      onUpdate: (self) => {
        const { direction, scroll } = self;

        if (scroll() > window.innerHeight) {
          if (direction === -1) {
            gsap.to(".navbar", {
              y: 0,
              opacity: 1,
              duration: 0.3,

              backgroundColor: "#002020",
              ease: "power2.out",
            });

            gsap.to(".second-nav", {
              top: 100,
            });
          } else if (direction === 1) {
            gsap.to(".navbar", {
              y: -100,
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(".second-nav", {
              top: 10,
            });
          }
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <nav ref={navRef}>
      <section className="fixed z-50 top-4 w-full navbar ">
        <section className=" wrapper py-4 flex justify-between items-center">
          <div className="flex gap-x-1 items-center">
            <img src={logo} alt="fuelsubsidy logo" className=" [ lg:w-full w-[28px] ]"  />
            <h1 className="text-remis-50 [ lg:text-[22.04px] text-base ]">FuelSubsidy</h1>
          </div>

          <button className="flex gap-x-2 w-fit px-5 py-3 items-center rounded-full bg-sec">
            <img src={location} alt="find station" />
            <h1 className="text-remis-500 font-bold [ lg:text-base text-sm ]">
              Find a station
            </h1>
          </button>
        </section>
      </section>
    </nav>
  );
}
