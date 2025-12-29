import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollConfig {
  containerRef: RefObject<HTMLDivElement | null>;
  sliderRef: RefObject<HTMLDivElement | null>;
  cardCount: number;
}

export const useHorizontalScroll = ({
  containerRef,
  sliderRef,
  cardCount,
}: ScrollConfig) => {
  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const ctx = gsap.context(() => {
      const totalSections = cardCount - 1;

      const getScrollAmount = () => {
        let sliderWidth = sliderRef.current!.scrollWidth;
        let containerWidth = containerRef.current!.offsetWidth;
        return -(sliderWidth - containerWidth);
      };

      const tween = gsap.to(sliderRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: "bottom bottom",
          end: () => "+=" + window.innerWidth * totalSections*3,
          scrub: 1,
          snap: {
            snapTo: 1 / totalSections,
            duration: { min: 0.1, max: 0.2 },
            delay: 0,
            ease: "power2.out",
            inertia: false,
          },
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, sliderRef, cardCount]);
};
