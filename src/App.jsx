import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  const containerRef = useRef(null);
useEffect(() => {
  gsap.fromTo(
    containerRef.current,
    { y: 150, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 2,     
      ease: "power2.out", 
      delay: 0.3       
  );
}, []);


  return (
    <div className="bg-pink-100 h-full w-full flex justify-center">
      <div
        ref={containerRef}
        className="w-[390px] mt-3 flex flex-col items-center justify-center"
      >
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
