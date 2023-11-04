import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { CircleProps } from "../types";

export const Circle = ({ isBreathing }: CircleProps) => {
  const maxSize = "350px";
  const minSize = "130px";

  const variants = {
    breatheIn: {
      width: maxSize,
      height: maxSize,
      transition: {
        duration: 0.5,
      },
    },
    hold: {
      width: maxSize,
      height: maxSize,
      transition: {
        duration: 0.5,
      },
    },
    breatheOut: {
      width: minSize,
      height: minSize,
      transition: {
        duration: 0.5,
      },
    },
    hold2: {
      width: minSize,
      height: minSize,
      transition: {
        duration: 0.5,
      },
    },
    glow: {
      backgroundColor: [
        "rgb(187, 230, 255)",
        "rgb(160, 195, 216)",
        "rgb(187, 230, 255)",
      ],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const controls = useAnimationControls();

  const sequence = async () => {
    controls.start("glow");
    for (let i = 0; i < 20; i++) {
      await controls.start("breatheIn");
      await controls.start("hold");
      await controls.start("breatheOut");
      await controls.start("hold2");
    }
  };

  const circleref = useRef<any>(null);

  useEffect(() => {
    if (isBreathing) {
      setTimeout(() => {
        sequence();
      }, 200);
    } else {
      return;
    }
  }, [isBreathing]);

  const getCurrentCircleSize = (circleDiv: any): string => {
    if (circleDiv) {
      const style = getComputedStyle(circleref.current);
      return style.width;
    } else {
      return minSize;
    }
  };

  const getCurrentCircleColor = (circleDiv: any): string => {
    if (circleDiv) {
      const style = getComputedStyle(circleref.current);
      return style.backgroundColor;
    } else {
      return "rgba(187, 230, 255)";
    }
  };
  const currentCircleColor = getCurrentCircleColor(circleref.current);
  const currentCurcleSize = getCurrentCircleSize(circleref.current);

  return isBreathing ? (
    <motion.div
      id="animated"
      ref={circleref}
      variants={variants}
      animate={controls}
      style={{
        backgroundColor: "rgba(187, 230, 255)",
        width: minSize,
        height: minSize,
        borderRadius: "50%",
      }}
    />
  ) : (
    <motion.main
      animate={{
        width: [currentCurcleSize, minSize],
        height: [currentCurcleSize, minSize],
        backgroundColor: [currentCircleColor, "rgba(187, 230, 255)"],
      }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: "rgba(187, 230, 255)",
        width: currentCurcleSize,
        height: currentCurcleSize,
        borderRadius: "50%",
      }}
    />
  );
};
