"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Photo from "@/components/Photo";

export default function HeroImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  return (
    <motion.div
      className="flex-1 flex justify-center xl:justify-end perspective-[1500px] w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative group w-[300px] h-[400px] md:w-[360px] md:h-[480px] lg:w-[400px] lg:h-[540px]"
      >
        <div
          className="absolute inset-0 bg-accent-primary"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <div
            className="absolute inset-[5px] bg-[#0a0a0a]"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <Photo />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
