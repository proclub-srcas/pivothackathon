"use client";

import { useRef } from "react";
import Image from "next/image";
import { useHorizontalScroll } from "./useHorizontalScroll";
import { ScrollingBackground } from "./ScrollingBackground";

//image imports
import bg from "./assets/bg.png";
import whyParticipate from "./assets/why-paricipate.svg";
import hb4 from "./assets/hb4.svg";
import qm from "./assets/qm.svg";
import collab from "./assets/collab.png";
import prizes from "./assets/prizes.png";
import workshops from "./assets/workshops.png";
import mentorship from "./assets/mentorship.png";
import recruitment from "./assets/recruitment.png";
import alert from "./assets/Alert.svg";
import scrollDown from "./assets/scroll-down.svg";

export default function WhyParticipate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useHorizontalScroll({
    containerRef,
    sliderRef,
    cardCount: 5,
  });

  return (
    <div className="relative w-full z-20 flex m-0 flex-col" ref={containerRef} style={{
      height:"900px"
    }}>
      <div className="relative w-full h-32 bottom-52 -mb-100 z-20 max-sm:mt-50 max-sm:-mb-78 max-sm:z-1">
          <Image
            src={"/stats-bottom.svg"}
            alt="glass design"
            className="w-full"
            width={100}
            height={100}
          />
          <Image
            src={scrollDown}
            alt="scroll down"
            className="absolute left-1/2 top-4 animate-bounce max-sm:w-[25px] max-sm:h-[28px]"
          />
      </div>
      <div 
        className="relative flex flex-row justify-around top-50 shrink-0 max-sm:top-5 max-sm:z-20 max-sm:mb-5 max-sm:flex-col max-sm:h-30" 
        style={{ 
          background: "linear-gradient(90deg, rgba(43, 8, 69, 1) 0%, #450079 100%)",
        }}
      >
        <Image
          src={whyParticipate}
          alt="Why Participate?"
          className="relative inline-block left-30 top-4 w-[900px] z-10 max-sm:w-[300px] max-sm:left-20 max-sm:top-5 max-sm:absolute"
        />
        {/*HB logo and question marks*/}
        <div className="relative right-10 bottom-9 max-sm:right-0 max-sm:-bottom-1 shrink-0 ">
          <Image
              src={hb4}
              alt="HackByte Logo"
              className="relative inline-block z-20 max-sm:w-[155px] max-sm:h-[135px] max-sm:left-35 max-sm:top-2 max-sm:mt-6"
            />
          <Image
            src={qm}
            alt="Question Mark"
            className="relative inline-block z-50 -ml-40 mb-18 max-sm:w-[48px] max-sm:h-[65px] max-sm:ml-23 max-sm:top-11"
          />
        </div>
      </div>

      {/*Scroll ref*/}
      <section
        className="relative isolate w-full h-full overflow-hidden border-t-white border-t-12 border-b-white border-b-12 p-0 max-sm:h-[450px]"
        style={{
          background: "linear-gradient(180deg, #8A00DA 0%, #BA45E8 100%)",
        }}

      >
        {/* Animated texture*/}
        <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
          <ScrollingBackground 
              imageUrl={bg.src} 
              speed={40}
              direction="diagonal" 
          />
        </div>

        <div
          ref={sliderRef}
          className="relative z-10 h-full flex flex-row w-max items-center"
        >
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-10 z-20 max-sm:h-[450px]">
            <Image src={collab} alt="collaborate" className="inline-block" />
            <Image
              src={alert}
              alt="Collaborate"
              width={120}
              height={120}
              className="absolute bottom-27 left-170 max-sm:bottom-30 max-sm:left-12 max-sm:w-[80px] max-sm:h-[80px]"
            />
          </div>
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-8 max-sm:h-[450px] max-sm:-top-2">
            <Image src={prizes} alt="prizes" className="inline-block" />
            <Image
              src={alert}
              alt="prizes"
              className="absolute w-[120px] h-[120px] bottom-27 left-170 max-sm:bottom-30 max-sm:left-8 max-sm:w-[80px] max-sm:h-[80px]" 
            />
          </div>
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-8 max-sm:h-[450px] max-sm:-top-3">
            <Image src={workshops} alt="workshops" className="inline-block" />
            <Image
              src={alert}
              alt="workshops"
              width={150}
              height={150}
              className="absolute bottom-27 left-170 max-sm:bottom-30 max-sm:left-10 max-sm:w-[80px] max-sm:h-[80px]"
            />
          </div>
          <div className="relative w-screen h-[600px] shrink-0 flex flex-col items-center justify-center p-8 max-sm:h-[450px] max-sm:-top-3">
            <Image src={mentorship} alt="mentorship" className="inline-block" />
            <Image
              src={alert}
              alt="Collaborate"
              width={120}
              height={120}
              className="absolute bottom-27 left-170 max-sm:bottom-30 max-sm:left-9 max-sm:w-[80px] max-sm:h-[80px]"
            />
          </div>
          <div className="relative w-screen h-141.5 shrink-0 flex flex-col items-center justify-center p-8  max-sm:h-[450px] max-sm:-top-6">
            <Image src={recruitment} alt="collaborate" className="inline-block" />
          </div>
        </div>
        <Image
          src={scrollDown}
          alt="scroll down"
          className="absolute left-1/2 z-30 bottom-5 w-[38px] h-[42px] animate-bounce"
        />
      </section>
    </div>
  );

}