/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// framer motion
import { motion, useMotionValue, frame } from "motion/react";
import * as variants from "@/lib/motionVariants";

import { useState, useCallback, useRef } from "react";

type FeatureCardProps = {
  classes?: string;
  children: JSX.Element;
};

const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [showGlow, setShowGlow] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();

      frame.read(() => {
        x.set(e.clientX - Number(rect?.left));
        y.set(e.clientY - Number(rect?.top));
      });
    },
    [x, y]
  );

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
    >
      <div
        className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden"
        ref={cardRef}
        onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {/* border effect */}
      <motion.div
        className="absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px]"
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: Number(showGlow) }}
        style={{ x, y }}
      ></motion.div>
    </motion.div>
  );
};

export default FeatureCard;
