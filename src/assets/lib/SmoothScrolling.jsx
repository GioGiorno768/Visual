import ReactLenis from "lenis/react";

export default function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}
