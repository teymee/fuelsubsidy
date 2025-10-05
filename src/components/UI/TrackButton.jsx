import { trackEvent } from "@/utils";
import React from "react";

export default function TrackButton({ eventParam, children }) {
  const handleClick = () => {
    trackEvent("cta_click", {
      ...eventParam,
    });
  };
  return <div onClick={handleClick}>{children}</div>;
}
