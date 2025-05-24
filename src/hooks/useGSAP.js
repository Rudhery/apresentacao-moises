import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const useGSAP = () => {
  const scope = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {}, scope);
    return () => ctx.revert();
  }, []);

  return { scope, gsap, ScrollTrigger };
};

// Animações pré-definidas
export const animations = {
  // Reveal animation para cards
  revealCards: (selector, delay = 0.1) => {
    return gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationY: 15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: delay,
      }
    );
  },

  // Slide in from sides
  slideInFromSides: (leftSelector, rightSelector) => {
    gsap.fromTo(
      leftSelector,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftSelector,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rightSelector,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightSelector,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Typewriter effect
  typewriter: (selector, text, duration = 2) => {
    return gsap.to(selector, {
      duration: duration,
      text: text,
      ease: "none",
      delay: 0.5,
    });
  },

  // Parallax background
  parallaxBg: (selector, speed = 0.5) => {
    gsap.to(selector, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: selector,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },

  // Modal entrance
  modalEntrance: (overlay, content) => {
    const tl = gsap.timeline();

    tl.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    ).fromTo(
      content,
      {
        scale: 0.7,
        opacity: 0,
        rotationY: 15,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.1"
    );

    return tl;
  },

  // Modal exit
  modalExit: (overlay, content) => {
    const tl = gsap.timeline();

    tl.to(content, {
      scale: 0.8,
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in",
    }).to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.2");

    return tl;
  },

  // Floating elements
  floatingAnimation: (selector) => {
    gsap.to(selector, {
      y: -20,
      rotation: 5,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  },

  // Stagger reveal
  staggerReveal: (selector, direction = "up") => {
    const yValue = direction === "up" ? 50 : -50;

    return gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: yValue,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.6,
          from: "start",
        },
      }
    );
  },

  // Hover scale effect
  hoverScale: (selector, scale = 1.05) => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: scale,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  },

  // Text reveal by characters
  revealText: (selector) => {
    return gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 100,
        skewY: 7,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  },
};

export default useGSAP;
