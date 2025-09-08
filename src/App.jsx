import Navbar from "@/components/Masterlayout/Navbar";
import Masterlayout from "./components/Masterlayout";
import Home from "./components/Home";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import CardAnimation from "./components/Home/CardAnimation";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import { getUserOS } from "./utils";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      index: true,
    },

  {
    path: "/download",
    element: <Homepage />,
    loader: async () => {
      const userOS = getUserOS();
      
      try {
        if (userOS === "android") {
          // Try to open Google Play Store
          window.location.href = "https://play.google.com/store/apps/details?id=africa.remis.b2c";
          return null;
        }
        //  else if (userOS === "ios") {
        //   // Try to open App Store
        //   window.location.href = "https://apps.apple.com/ng/app/fuelsubsidy/id6745834042";
        //   return null;
        // }
        
        else {
          // Redirect to homepage for desktop/other devices
          return redirect("/");
        }
      } catch (error) {
        console.error("Error redirecting to app store:", error);
        // Fallback to homepage if there's an error
        return redirect("/");
      }
    },
  },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
