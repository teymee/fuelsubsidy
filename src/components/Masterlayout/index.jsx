import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Masterlayout({ children }) {
  return (
    <section className="relative">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
