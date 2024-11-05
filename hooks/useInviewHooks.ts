import { RefObject, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export default function useInviewHooks(
  itemref: RefObject<Element> | undefined
) {
  const controls = useAnimation();
  const inView = useInView(itemref as RefObject<Element>, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return controls;
}
