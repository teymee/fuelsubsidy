import React from "react";

// 🚨 assets
import contact from "@/assets/svg/contact-us.svg";
import qrCode from "@/assets/svg/qr-code.svg";
export default function Footer() {
  return (
    <section className="bg-remis-800">
      <section className="flex gap-x-4 items-center justify-center">
        <h1 className="text-remisLite-300 text-[160px]">FuelSubsidy</h1>
        <img src={contact} alt="" className="h-[120px] w-[7.5rem]" />
      </section>

      <section className="flex justify-between wrapper py-20 text-remis-50">
        <section>
          <div className="bg-[#54868866] w-fit flex gap-x-2 item-center pr-4 rounded-2xl">
            <img src={qrCode} alt="" className="w-[95px]" />
            <p className="my-auto text-md">
              Scan to download our App on the <br /> Play store and App store.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h1 className="text-remisLite-500 text-heading-lg font-semibold">
            Socials
          </h1>
          <ul className="text-white space-y-6 font-semibold">
            <li>Instagram</li>

            <li>Twitter</li>

            <li>Facebook</li>

            <li>Youtube</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h1 className="text-remisLite-500 text-heading-lg font-semibold">
            Get in touch
          </h1>

          <p className="underline font-semibold text-white">
            hello@fuelsubsidy.com
          </p>
        </section>
      </section>
    </section>
  );
}
