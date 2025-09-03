import Navbar from "@/components/Masterlayout/Navbar";
import Masterlayout from "./components/Masterlayout";
import Home from "./components/Home";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import CardAnimation from "./components/Home/CardAnimation";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  return (
    <>
      <Masterlayout>
        <Home />
        {/* <CardAnimation/> */}
      </Masterlayout>
    </>
  );
}

export default App;
