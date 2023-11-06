import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { CircleProps } from "../types";

export const Circle = ({
  isBreathing,
  setBreathing,
  breathingTechnique,
}: CircleProps) => {
  const maxSize = "350px";
  const minSize = "130px";
  const color = "rgb(187, 230, 255)";
  const minBrightness = "rgb(160, 195, 216)";

  const circleref = useRef<HTMLDivElement>(null);
  const idleCircleref = useRef<HTMLDivElement>(null);

  const getCurrentCircleSize = (circleDiv: HTMLDivElement | null): string => {
    if (circleDiv) {
      const style = getComputedStyle(circleDiv);
      return style.width;
    } else {
      return minSize;
    }
  };

  const getCurrentCircleColor = (circleDiv: HTMLDivElement | null): string => {
    if (circleDiv) {
      const style = getComputedStyle(circleDiv);
      return style.backgroundColor;
    } else {
      return color;
    }
  };

  const currentCircleColor = getCurrentCircleColor(circleref.current);
  const currentCurcleSize = getCurrentCircleSize(circleref.current);
  const idleCircleSize = getCurrentCircleSize(idleCircleref.current);

  const variants = {
    breatheIn: {
      width: maxSize,
      height: maxSize,
      transition: {
        duration: breathingTechnique.breatheIn,
      },
    },
    hold: {
      width: maxSize,
      height: maxSize,
      transition: {
        duration: breathingTechnique.hold,
      },
    },
    breatheOut: {
      width: minSize,
      height: minSize,
      transition: {
        duration: breathingTechnique.breatheOut,
      },
    },
    hold2: {
      width: minSize,
      height: minSize,
      transition: {
        duration: breathingTechnique.hold2,
      },
    },
    glow: {
      backgroundColor: [color, minBrightness, color],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const controls = useAnimationControls();

  const sequence = async () => {
    controls.start("glow");
    for (let i = 0; i < breathingTechnique.breaths; i++) {
      await controls.start("breatheIn");
      await controls.start("hold");
      await controls.start("breatheOut");
      await controls.start("hold2");
    }
    setBreathing(false)
  };

  useEffect(() => {
    if (isBreathing) {
      sequence();
    }
  }, [isBreathing]);

  return isBreathing ? (
    <motion.div
      ref={circleref}
      variants={variants}
      initial={{
        width: idleCircleSize,
        height: idleCircleSize,
      }}
      animate={controls}
      style={{
        backgroundColor: color,
        width: minSize,
        height: minSize,
        borderRadius: "50%",
      }}
    />
  ) : (
    <motion.main
      ref={idleCircleref}
      animate={{
        width: [currentCurcleSize, minSize],
        height: [currentCurcleSize, minSize],
        backgroundColor: [currentCircleColor, color],
      }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: color,
        width: currentCurcleSize,
        height: currentCurcleSize,
        borderRadius: "50%",
      }}
    />
  );
};
