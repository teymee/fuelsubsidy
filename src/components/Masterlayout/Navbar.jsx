import React, { useRef} from "react";

// 🚨 assets
import logo from "@/assets/svg/logo.svg";
// import location from "@/assets/svg/location.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import appStore from "@/assets/svg/appStore.svg";
import googlePlay from "@/assets/svg/googlePlay.svg";
import apple from "@/assets/svg/apple.svg";
import playstore from "@/assets/svg/playstore.svg"; 

export default function Navbar() {
  const navRef = useRef();

  // const [toggleNav, setToggleNav] = useState(false);
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
            <img
              src={logo}
              alt="fuelsubsidy logo"
              className=" [ lg:w-full w-[28px] ]"
            />
            <h1 className="text-remis-50 [ lg:text-[22.04px] text-base ]">
              FuelSubsidy
            </h1>
          </div>


           <section className="bg-primary rounded-md  gap-x-4 flex">
            <a
              href="https://apps.apple.com/ng/app/fuelsubsidy/id6745834042"
              target="_blank"
            >
              <img src={appStore} alt="" className="w-full h-[40px] hidden lg:block" />
              <img src={apple} alt="" className="block lg:hidden" />
            </a>

            <div className="">
              <a
                href="https://play.google.com/store/apps/details?id=africa.remis.b2c"
                target="_blank"
              >
                <img src={googlePlay} alt="" className="w-full h-[40px]  hidden lg:block" />
                 <img src={playstore} alt="" className="block lg:hidden" />
              </a>
            </div>
          </section>

          {/* <button
            onClick={() => setToggleNav(!toggleNav)}
            className="flex gap-x-2 w-fit px-5 py-3 items-center rounded-full bg-sec"
          >
            <img src={location} alt="find station" />
            <h1 className="text-remis-500 font-bold [ lg:text-base text-sm ]">
              Find a station
            </h1>
          </button> */}
        </section>

     
      </section>
    </nav>
  );
}
