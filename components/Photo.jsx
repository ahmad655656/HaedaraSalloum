"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        className="relative w-full h-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/asset/Myphoto.jpg"
          priority
          quality={100}
          fill
          alt="Haedara Salloum"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
