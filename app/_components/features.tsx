"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import type { PageContextShape } from "~/lib/get-page-context";
import { cn } from "~/util";
import { staggerChild, staggerContainer } from "~/util/variants";

export default function Features({
  theme,
  featureItems,
}: Pick<PageContextShape, "featureItems" | "theme">) {
  const featureKeys = Object.keys(featureItems);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.25, once: true });
  return (
    <section
      className={cn(`bg-white py-10 text-black sm:py-12 lg:py-16`, theme)}
    >
      <div className="container mx-auto">
        <motion.ul
          ref={inViewRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4"
        >
          {featureKeys.map((key) => (
            <motion.li
              key={key}
              variants={staggerChild}
              className="group relative flex flex-col items-center justify-center rounded-[10px] border border-primary-500 bg-white px-5 py-8 text-center transition-colors hover:bg-primary-500 md:items-start md:text-left"
            >
              <p className="mb-4 text-h2 text-primary-500 transition-colors group-hover:text-white">
                {key}
              </p>
              <p className="max-w-[20ch] transition-colors group-hover:text-white">
                {featureItems[key]}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
