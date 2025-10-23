import Home from "@/components/Home";
import Masterlayout from "@/components/Masterlayout";
import React from "react";

export default function Homepage() {
  return (
    <>
      {/* 🚨 SEO improvement  */}
      <title>Fuelsubsidy | Smart fueling, easy savings</title>
      <meta
        name="description"
        content="Buy fuel at discounted rates, earn rewards"
      />
      <meta
        name="keywords"
        content="Fuelsubsidy, fuelmetrics, fuel discounts, remis, epump, oil and gas, smart fueling, fuel rewards, fuel savings, fuel app, fuel management, fuel tracking"
      />

      {/* Structured Data (JSON-LD) for better search results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fuelmetrics",
          url: "https://www.fuelsubsidy.com/",
          // logo: "https://yourdomain.com/logo.png",
          description:
            "Your company descriptionWe build innovative, data-driven technology solutions that simplify operations, improve decision-making, and unlock new opportunities for growth. Trusted by over 200 companies across Africa, our tools are designed to help you work smarter, reduce losses, and scale confidently",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234 913 104 8999",
            contactType: "Customer Service",
          },
          sameAs: [
            "https://www.facebook.com/share/19Kym1bgon/",
            "https://x.com/EpumpAfrica",
            "https://www.linkedin.com/company/epumpafrica/posts/?feedView=all",
            "https://www.instagram.com/epumpafrica/?hl=en"
          ],
        })}
      </script>

      {/*  */}
      <Masterlayout>
        <Home />
      </Masterlayout>
    </>
  );
}
